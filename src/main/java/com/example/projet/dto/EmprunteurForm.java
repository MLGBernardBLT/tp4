package com.example.projet.dto;

import com.example.projet.model.utilisateur.Emprunteur;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
public class EmprunteurForm {
    private static DateTimeFormatter DATETIMEFORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private String id;

    @NotNull
    @NotBlank
    private String nom;
    @NotNull
    @NotBlank
    private String prenom;

    public EmprunteurForm(String id, String nom, String prenom) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }

    public EmprunteurForm(Emprunteur emprunteur) {
        this.id = Long.toString(emprunteur.getId());
        this.nom = emprunteur.getNom();
        this.prenom = emprunteur.getPrenom();
    }

    public Emprunteur toEmprunteur() {
        final Emprunteur emprunteur = new Emprunteur(nom, prenom);
        long ancienId;
        try {
            ancienId = Long.parseLong(id);
            if (ancienId > 0)
                emprunteur.setId(ancienId);
        } catch (NumberFormatException e) {
        }

        return emprunteur;
    }

    public String getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

}
