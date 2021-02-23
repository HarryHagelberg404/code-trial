echo "Starting the application" 

cd backend
echo "Starting the backend server"
start mvnw spring-boot:run

cd ..
cd client

echo "Downloading dependencies"
start %~dp0\client\installDependencies.bat
TIMEOUT /T 20 /nobreak

echo "Starting the client server"
start %~dp0\client\startClient.bat

cd ..