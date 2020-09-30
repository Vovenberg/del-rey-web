package com.killprojects.delreybackend.controller;

import com.killprojects.delreybackend.entity.Client;
import com.killprojects.delreybackend.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/")
public class ClientController {

    private final ClientRepository clientRepository;

    @PostMapping("/client")
    public void createClient(@RequestParam(name = "instagramLogin") String instagramLogin,
                             @RequestParam(name = "phoneNumber", required = false) String phoneNumber,
                             @RequestParam(name = "name", required = false) String name,
                             @RequestParam(name = "surname", required = false) String surname) {
        log.info("createClient by {}, {}, {}, {}", instagramLogin, phoneNumber, name, surname);
        clientRepository.save(Client.builder()
                .instagramLogin(instagramLogin)
                .name(name)
                .surname(surname)
                .phoneNumber(phoneNumber)
                .build());
    }

    @GetMapping("/client")
    public Client getClient(@RequestParam(name = "instagramLogin", required=false) String instagramLogin) {
        log.info("getClient by {}", instagramLogin);
        return clientRepository.findByInstagramLogin(instagramLogin);
    }

    @GetMapping("/client/all")
    public List<Client> getAllClient(Principal principal) {
        log.info("Principal:{}", principal);
        log.info("getAllClient");
        return clientRepository.findAll();
    }
}
