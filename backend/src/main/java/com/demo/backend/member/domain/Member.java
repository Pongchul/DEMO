package com.demo.backend.member.domain;

import com.demo.backend.global.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30)
    private String socialLoginId;

    @Embedded
    private String nickname;

    @Enumerated(value = STRING)
    private MemberState status;


    public Member(Long id, String socialLoginId, String nickname, MemberState status) {
        this.id = id;
        this.socialLoginId = socialLoginId;
        this.nickname = nickname;
        this.status = status;
    }

}
