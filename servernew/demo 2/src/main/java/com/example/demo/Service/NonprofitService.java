package main.java.com.example.demo.Service;

import org.springframework.stereotype.Service;

import main.java.com.example.demo.Model.Nonprofit;

import java.util.*;

@Service
public class NonprofitService {

    private final Map<String, Nonprofit> nonprofits = new HashMap<>();

    public Nonprofit createNonprofit(Nonprofit nonprofit) {
        nonprofits.put(nonprofit.getEmail(), nonprofit);
        return nonprofit;
    }

    public List<Nonprofit> getAllNonprofit() {
        // Retrieve all foundations from the map and return as a list
        return new ArrayList<>(nonprofits.values());
    }

    public Nonprofit getAllNonprofitByEmail(String Email) {
        // Retrieve all foundations from the map and return as a list
        return nonprofits.get(Email);
    }
}
