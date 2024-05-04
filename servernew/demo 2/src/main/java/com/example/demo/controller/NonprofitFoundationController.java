package main.java.com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import main.java.com.example.demo.Model.EmailRequest;
import main.java.com.example.demo.Model.Email;
import main.java.com.example.demo.Model.Foundation;
import main.java.com.example.demo.Model.Nonprofit;
import main.java.com.example.demo.Service.EmailService;
import main.java.com.example.demo.Service.FoundationService;
import main.java.com.example.demo.Service.NonprofitService;

import java.util.*;

@CrossOrigin(
    origins = {
        "http://localhost:3000", 
        },
    methods = {
                RequestMethod.OPTIONS,
                RequestMethod.GET,
                RequestMethod.PUT,
                RequestMethod.DELETE,
                RequestMethod.POST
})

@RestController
@RequestMapping("/api")
public class NonprofitFoundationController {

    private final NonprofitService nonprofitService;
    private final FoundationService foundationService;
    private final EmailService emailService;

    public NonprofitFoundationController(NonprofitService nonprofitService, FoundationService foundationService,
                                         EmailService emailService) {
        this.nonprofitService = nonprofitService;
        this.foundationService = foundationService;
        this.emailService = emailService;
    }

    @GetMapping("/foundations") // Endpoint to get list of foundations
    public List<Foundation> getAllFoundations() {
        return foundationService.getAllFoundations();
    }

    @PostMapping("/nonprofits")
    public Nonprofit createNonprofit(@RequestBody Nonprofit nonprofit) {
        return nonprofitService.createNonprofit(nonprofit);
    }

    @GetMapping("/nonprofits")
    public List<Nonprofit> getNonprofit() {
        return nonprofitService.getAllNonprofit();
    }

    @PostMapping("/foundations")
    public Foundation createFoundation(@RequestBody Foundation foundation) {
        return foundationService.createFoundation(foundation);
    }

    @PostMapping("/sendEmails")
    public String sendEmails(@RequestBody EmailRequest request) {
        List<String> nonprofitEmails = request.getNonprofitEmails();
        // Call your email service method with the list of emails
        return emailService.sendEmails(nonprofitEmails);
    }

    @GetMapping("/sentEmails")
    public List<Email> getSentEmails() {
        return emailService.getSentEmails();
    }
}
