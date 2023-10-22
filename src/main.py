import cv2
import time

from fastapi import FastAPI

app = FastAPI()

# Load Haar cascades for face and eye detection
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades +'haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades +'haarcascade_eye_tree_eyeglasses.xml')

currenttime=time.time()

# Function to capture an image from the webcam and analyze it
def capture_and_analyze():
    eyes_detected = True
    # Initialize the webcam
    cap = cv2.VideoCapture(0)  # 0 indicates the default camera

    if not cap.isOpened():
        print("Error: Could not open webcam.")
        return

    try:
        while True:
            if time.time() - currenttime >= 1*60:
                break
            # Capture a frame from the webcam
            ret, frame = cap.read()

            if not ret:
                print("Error: Could not capture a frame.")
                break

            # Convert the frame to grayscale
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

            # Detect faces in the frame
            faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=4)
            print('Number of detected faces:', len(faces))
            total_eyes = 0
            for (x, y, w, h) in faces:
                roi_gray = gray[y:y+h, x:x+w]
                roi_color = frame[y:y+h, x:x+w]

                # Detect eyes within the detected face area (roi)
                eyes = eye_cascade.detectMultiScale(roi_gray)
                print(f"Number of Eyes: {len(eyes)}")
                total_eyes+= len(eyes)
                # Draw rectangles around the eyes
                for (ex, ey, ew, eh) in eyes:
                    cv2.rectangle(roi_color, (ex, ey), (ex+ew, ey+eh), (0, 255, 255), 2)

            # Display the image with detected eyes
            cv2.imshow('Eyes Detection', frame)
            if eyes_detected == False and total_eyes > 0:
                print(f"Welcome back!  time: {time.time() - currenttime}")
                eyes_detected = True
            if eyes_detected == False and total_eyes == 0:
                print(f"Are you still there?!? time: {time.time() - currenttime}")
                #send notification here
                break
            
            if eyes_detected == True and total_eyes ==0:
                print(f"Warning! You haven't looked at the screen!  time: {time.time() - currenttime}")
                eyes_detected = False

            # Wait for 30 seconds or until a key is pressed
            key = cv2.waitKey(1000)
            if key != -1:
                break

    finally:
        cap.release()
        cv2.destroyAllWindows()


@app.get("/")
async def root():
    # Call the function to capture and analyze images
    capture_and_analyze()

