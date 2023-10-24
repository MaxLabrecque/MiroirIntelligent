package com.cstjean.miroirapi.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 * Entity for the Config table.
 *
 * @author Charles-Antoine.
 */
@Entity
@Getter
@Setter
public class Config {

  /**
   * Id of the config.
   */
  @Id
  @GeneratedValue
  private int id;

  /**
   * Name of the config.
   */
  @ManyToOne
  @JoinColumn(name = "config_name_id")
  @NotNull
  private ConfigName configName;

  /**
   * Value of the config.
   */
  @Column(length = 100, nullable = false)
  private String configValue;
}
