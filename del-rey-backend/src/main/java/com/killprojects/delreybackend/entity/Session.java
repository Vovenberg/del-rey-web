package com.killprojects.delreybackend.entity;

import com.killprojects.delreybackend.model.SessionStatus;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;
import java.util.UUID;

@Data
@Entity
@Table(name = "client")
public class Session {
    @Id
    @Type(type = "uuid-char")
    private UUID id;

    @Column(name = "date")
    private Instant date;

    @Column(name = "session_status")
    private SessionStatus sessionStatus;

}
