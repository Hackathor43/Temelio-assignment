package main.java.com.example.demo.Model;
import java.util.List;

public class EmailRequest {
    private List<String> nonprofitEmails;

    public List<String> getNonprofitEmails() {
        return nonprofitEmails;
    }

    public void setNonprofitEmails(List<String> nonprofitEmails) {
        this.nonprofitEmails = nonprofitEmails;
    }
}