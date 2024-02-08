package com.elderly.elderly.controller;

import com.elderly.elderly.dto.Feedbackdto;
import com.elderly.elderly.service.Feedbackservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
public class Feedbackcontroller {

    private final Feedbackservice feedbackservice;

    public Feedbackcontroller(Feedbackservice feedbackservice) {
        this.feedbackservice = feedbackservice;
    }

    @GetMapping
    public ResponseEntity<List<Feedbackdto>> getAllFeedbacks() {
        List<Feedbackdto> feedbacks = feedbackservice.getAllFeedbacks();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Feedbackdto> createFeedback(@RequestBody Feedbackdto feedbackDto) {
        Feedbackdto createdFeedback = feedbackservice.createFeedback(feedbackDto);
        return new ResponseEntity<>(createdFeedback, HttpStatus.CREATED);
    }
}
