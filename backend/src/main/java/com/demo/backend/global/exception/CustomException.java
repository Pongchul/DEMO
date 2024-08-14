package com.demo.backend.global.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class CustomException extends RuntimeException {
    private final String errorCode;
    private final String message;

    public CustomException(ErrorCode code) {
        this.errorCode = code.getErrorCode();
        this.message = code.getMessage();
    }
}
