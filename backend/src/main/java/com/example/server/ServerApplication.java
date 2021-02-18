package com.example.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication {
	private DBManager _dbManager = new DBManager();

	public static void main(String[] args) {
		DBManager.init();
		SpringApplication.run(ServerApplication.class, args);
	}

}
