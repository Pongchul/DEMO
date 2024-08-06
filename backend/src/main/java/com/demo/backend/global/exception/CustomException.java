package com.demo.backend.global.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class CustomException implements ErrorCode {

    ;

    private final int code;
    private final String message;

    public CustomException(ErrorCode code) {
        this.code = code.getCode();
        this.message = code.getMessage();
    }
}
