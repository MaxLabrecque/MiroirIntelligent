package com.cstjean.miroirapi.controller;

import com.cstjean.miroirapi.dto.ConfigDto;
import com.cstjean.miroirapi.service.ConfigService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.handler.annotation.support.MethodArgumentNotValidException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Rest controller of the config.
 *
 * @author Charles-Antoine.
 */
@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class ConfigSocketController {

  /**
   * Service of the Config entity.
   */
  @Autowired
  private ConfigService configService;

  /**
   * Send the config to all clients.
   *
   * @param config the config to send.
   * @return the config.
   */
  @MessageMapping({"/send"})
  @SendTo("/config/public")
  public ConfigDto modifyConfig(@Payload @Valid ConfigDto config) {
    return configService.handleConfigValue(config);
  }

  /**
   * Handle the MethodArgumentNotValidException.
   *
   * @param e the MethodArgumentNotValidException.
   * @return the error message.
   */
  @MessageExceptionHandler(MethodArgumentNotValidException.class)
  @SendTo("/config/public")
  public String methodArgumentNotValidException(MethodArgumentNotValidException e) {
    return e.getBindingResult().getAllErrors().get(0).getDefaultMessage();
  }

}
