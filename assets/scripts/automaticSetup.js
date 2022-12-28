const automaticSetup = {
    lieux: `id;region;commune;sites;latitude;longitude;type_objet_retrouves;quantite;NMI;datation;sources;pages
    1;Vendée;Givrand;Les Charrues Noires;;;Moules bivalves;24;;BF IIIb;DOYEN, 2017;39
    2;Bourgogne;Dijon;rue inexistante;;;poteries;50;200;fake period;vieux livre, 2017;40
    3;Pays de la Loire;Les Pineaux;Le Terminus;;;enclumes;2;50;inconnu;Grimoire, 1412;257`,
    materiels: `id;types;materiaux;structures;etat;id_site;sources;pages;observations
    1;moules bivalves ;TC;F. 145;incomplet;1;DOYEN, 2017;39;incomplet et cassé donc impossibilité de deviné l’objet ayant été moulé 
    2;machins bizards;suspect;F45S4521000;complet;1;vieux livre, 2017;50;ceci est une observation
    3;enclume;fer;4547DZ210;complet;3;Grimoire, 1412;257;encore une observation pertinente`,
}
export { automaticSetup };