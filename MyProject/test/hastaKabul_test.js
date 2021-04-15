Feature('hastaKabul');


Before(({ I }) => {

    I.login();

});

Scenario('test something', async ({ I , girisPagePage,randevuuAlmaPage}) => {

    girisPagePage.kayıtKabulEkranAc();
    I.Randevualma();
    randevuuAlmaPage.hastaneSeçme();
    randevuuAlmaPage.doktorSeçme();
    randevuuAlmaPage.randevuSaat()
    pause();


});

