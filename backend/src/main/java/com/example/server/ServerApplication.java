package com.example.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		new DBManager();
		System.setProperty("server.port","8081");
		SpringApplication.run(ServerApplication.class, args);
	}
}
