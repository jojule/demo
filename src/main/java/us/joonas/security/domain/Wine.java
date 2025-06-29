package us.joonas.security.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Wine {

    private Long id;

    private String vintageYear;

    private String grapeVariety;

    private String region;

    private BigDecimal alcoholContent;

    private String tastingNotes;

    private Double bottleSize;

    private LocalDate releaseDate;

    private String producer;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVintageYear() {
        return vintageYear;
    }

    public void setVintageYear(String vintageYear) {
        this.vintageYear = vintageYear;
    }

    public String getGrapeVariety() {
        return grapeVariety;
    }

    public void setGrapeVariety(String grapeVariety) {
        this.grapeVariety = grapeVariety;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public BigDecimal getAlcoholContent() {
        return alcoholContent;
    }

    public void setAlcoholContent(BigDecimal alcoholContent) {
        this.alcoholContent = alcoholContent;
    }

    public String getTastingNotes() {
        return tastingNotes;
    }

    public void setTastingNotes(String tastingNotes) {
        this.tastingNotes = tastingNotes;
    }

    public Double getBottleSize() {
        return bottleSize;
    }

    public void setBottleSize(Double bottleSize) {
        this.bottleSize = bottleSize;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }
}
