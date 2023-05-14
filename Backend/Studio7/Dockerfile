# Use a base image with Maven installed
FROM maven:3.6.3-openjdk-11-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the application code into the container
COPY . .

# Build the JAR file
RUN mvn clean package

# Use a base image with Java installed
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/app.jar .

# Set the entry point to run the JAR file
CMD ["java", "-jar", "app.jar"]


# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]
