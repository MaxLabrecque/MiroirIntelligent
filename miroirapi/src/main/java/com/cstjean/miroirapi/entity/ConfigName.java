package com.cstjean.miroirapi.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * Entity for the ConfigName table.
 *
 * @author Charles-Antoine.
 */
@Entity
@Getter
@Setter
public class ConfigName {

  /**
   * Id of the ConfigName.
   */
  @Id
  @GeneratedValue
  private Integer id;

  /**
   * Name of the ConfigName.
   */
  @Column(length = 50, nullable = false)
  private String name;
}
