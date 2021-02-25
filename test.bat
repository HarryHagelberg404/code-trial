echo "Starting the testing phase"

cd backend

echo "Starting the backend tests"
start mvnw test

cd ..
cd client

echo "Starting the frontend tests"
cd ..