package main.java.com.example.demo.Service;

import org.springframework.stereotype.Service;

import main.java.com.example.demo.Model.Email;
import main.java.com.example.demo.Model.Nonprofit;

import java.util.*;

@Service
public class EmailService {

    private final List<Email> sentEmails = new ArrayList<>();
    private final NonprofitService nonprofitService;

    public EmailService(NonprofitService nonprofitService) {
        this.nonprofitService = nonprofitService;
    }

    public String sendEmails(List<String> nonprofitEmails) {
        for (String nonprofitEmail : nonprofitEmails) {
            // Fetch nonprofit details and compose email message
            Nonprofit Nonprofit = nonprofitService.getAllNonprofitByEmail(nonprofitEmail);
            System.out.println(Nonprofit);
            String message;
            if (Nonprofit != null) {
                message = "<html><body>"
                        + "<p>Dear" + Nonprofit.getName() + ",</p>"
                        + "<p>Thank you for your application. We are pleased to inform you that your donation has been successfully sent.</p>"
                        + "<p><strong>Nonprofit:</strong> " + nonprofitEmail + "</p>"
                        + "<p><strong>Address:</strong> " + Nonprofit.getAddress() + "</p>"
                        + "</body></html>";
            } else {
                message = "<html><body>"
                        + "<p>Dear,</p>"
                        + "<p>Thank you for your application. We are pleased to inform you that your donation has been successfully sent.</p>"
                        + "<p><strong>Nonprofit:</strong> " + nonprofitEmail + "</p>"
                        + "</body></html>";
            }
            System.out.println("Sending email to " + nonprofitEmail + ": " + message);
            sentEmails.add(new Email(nonprofitEmail, message));
        }
        return "Emails sent successfully";
    }

    public List<Email> getSentEmails() {
        return sentEmails;
    }
}
