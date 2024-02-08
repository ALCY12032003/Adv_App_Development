package com.elderly.elderly.controller;

import com.elderly.elderly.dto.Bookdto;
import com.elderly.elderly.service.Bookservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class Bookcontroller {

    private final Bookservice bookService;

    public Bookcontroller(Bookservice bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ResponseEntity<List<Bookdto>> getAllBooks() {
        List<Bookdto> books = bookService.getAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }
    @GetMapping("/{username}")
    public ResponseEntity<Bookdto> getBookByUsername(@PathVariable String username) {
        Bookdto book = bookService.getBookByUsername(username);
        return book != null
                ? new ResponseEntity<>(book, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Bookdto> createBook(@RequestBody Bookdto bookDto) {
        Bookdto createdBook = bookService.createBook(bookDto);
        return new ResponseEntity<>(createdBook, HttpStatus.CREATED);
    }


    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteBookByUsername(@PathVariable String username) {
        bookService.deleteBookByUsername(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{username}")
    public ResponseEntity<Bookdto> updateBookByUsername(
            @PathVariable String username,
            @RequestBody Bookdto updatedBookDto
    ) {
        Bookdto updatedBook = bookService.updateBookByUsername(username, updatedBookDto);
        return updatedBook != null
                ? new ResponseEntity<>(updatedBook, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
