package main.java.com.example.demo.Service;

import org.springframework.stereotype.Service;

import main.java.com.example.demo.Model.Foundation;

import java.util.*;

@Service
public class FoundationService {

    private final Map<String, Foundation> foundations = new HashMap<>();

    public Foundation createFoundation(Foundation foundation) {
        foundations.put(foundation.getEmail(), foundation);
        return foundation;
    }

    public List<Foundation> getAllFoundations() {
        // Retrieve all foundations from the map and return as a list
        return new ArrayList<>(foundations.values());
    }
}
