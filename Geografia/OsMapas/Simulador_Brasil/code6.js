gdjs.BiomasCode = {};
gdjs.BiomasCode.GDMapaObjects1= [];
gdjs.BiomasCode.GDMapaObjects2= [];
gdjs.BiomasCode.GDMapaObjects3= [];
gdjs.BiomasCode.GDbackObjects1= [];
gdjs.BiomasCode.GDbackObjects2= [];
gdjs.BiomasCode.GDbackObjects3= [];
gdjs.BiomasCode.GDTExto_9595BiomasObjects1= [];
gdjs.BiomasCode.GDTExto_9595BiomasObjects2= [];
gdjs.BiomasCode.GDTExto_9595BiomasObjects3= [];
gdjs.BiomasCode.GDDescObjects1= [];
gdjs.BiomasCode.GDDescObjects2= [];
gdjs.BiomasCode.GDDescObjects3= [];
gdjs.BiomasCode.GDFaunaObjects1= [];
gdjs.BiomasCode.GDFaunaObjects2= [];
gdjs.BiomasCode.GDFaunaObjects3= [];
gdjs.BiomasCode.GDvegetaObjects1= [];
gdjs.BiomasCode.GDvegetaObjects2= [];
gdjs.BiomasCode.GDvegetaObjects3= [];
gdjs.BiomasCode.GDhidroObjects1= [];
gdjs.BiomasCode.GDhidroObjects2= [];
gdjs.BiomasCode.GDhidroObjects3= [];
gdjs.BiomasCode.GDclimaObjects1= [];
gdjs.BiomasCode.GDclimaObjects2= [];
gdjs.BiomasCode.GDclimaObjects3= [];
gdjs.BiomasCode.GDSoloObjects1= [];
gdjs.BiomasCode.GDSoloObjects2= [];
gdjs.BiomasCode.GDSoloObjects3= [];
gdjs.BiomasCode.GDFundoObjects1= [];
gdjs.BiomasCode.GDFundoObjects2= [];
gdjs.BiomasCode.GDFundoObjects3= [];
gdjs.BiomasCode.GDverdeObjects1= [];
gdjs.BiomasCode.GDverdeObjects2= [];
gdjs.BiomasCode.GDverdeObjects3= [];
gdjs.BiomasCode.GDrosaObjects1= [];
gdjs.BiomasCode.GDrosaObjects2= [];
gdjs.BiomasCode.GDrosaObjects3= [];
gdjs.BiomasCode.GDVerdeCObjects1= [];
gdjs.BiomasCode.GDVerdeCObjects2= [];
gdjs.BiomasCode.GDVerdeCObjects3= [];
gdjs.BiomasCode.GDlaranObjects1= [];
gdjs.BiomasCode.GDlaranObjects2= [];
gdjs.BiomasCode.GDlaranObjects3= [];
gdjs.BiomasCode.GDaquela_9595corObjects1= [];
gdjs.BiomasCode.GDaquela_9595corObjects2= [];
gdjs.BiomasCode.GDaquela_9595corObjects3= [];
gdjs.BiomasCode.GDmareloObjects1= [];
gdjs.BiomasCode.GDmareloObjects2= [];
gdjs.BiomasCode.GDmareloObjects3= [];
gdjs.BiomasCode.GDDesc01Objects1= [];
gdjs.BiomasCode.GDDesc01Objects2= [];
gdjs.BiomasCode.GDDesc01Objects3= [];
gdjs.BiomasCode.GDDesc02Objects1= [];
gdjs.BiomasCode.GDDesc02Objects2= [];
gdjs.BiomasCode.GDDesc02Objects3= [];
gdjs.BiomasCode.GDDesc03Objects1= [];
gdjs.BiomasCode.GDDesc03Objects2= [];
gdjs.BiomasCode.GDDesc03Objects3= [];
gdjs.BiomasCode.GDDesc04Objects1= [];
gdjs.BiomasCode.GDDesc04Objects2= [];
gdjs.BiomasCode.GDDesc04Objects3= [];
gdjs.BiomasCode.GDDesc05Objects1= [];
gdjs.BiomasCode.GDDesc05Objects2= [];
gdjs.BiomasCode.GDDesc05Objects3= [];
gdjs.BiomasCode.GDDesc06Objects1= [];
gdjs.BiomasCode.GDDesc06Objects2= [];
gdjs.BiomasCode.GDDesc06Objects3= [];
gdjs.BiomasCode.GDAmazaObjects1= [];
gdjs.BiomasCode.GDAmazaObjects2= [];
gdjs.BiomasCode.GDAmazaObjects3= [];
gdjs.BiomasCode.GDPampaObjects1= [];
gdjs.BiomasCode.GDPampaObjects2= [];
gdjs.BiomasCode.GDPampaObjects3= [];
gdjs.BiomasCode.GDmataObjects1= [];
gdjs.BiomasCode.GDmataObjects2= [];
gdjs.BiomasCode.GDmataObjects3= [];
gdjs.BiomasCode.GDpantaObjects1= [];
gdjs.BiomasCode.GDpantaObjects2= [];
gdjs.BiomasCode.GDpantaObjects3= [];
gdjs.BiomasCode.GDCerraObjects1= [];
gdjs.BiomasCode.GDCerraObjects2= [];
gdjs.BiomasCode.GDCerraObjects3= [];
gdjs.BiomasCode.GDCaaObjects1= [];
gdjs.BiomasCode.GDCaaObjects2= [];
gdjs.BiomasCode.GDCaaObjects3= [];
gdjs.BiomasCode.GDVoltarObjects1= [];
gdjs.BiomasCode.GDVoltarObjects2= [];
gdjs.BiomasCode.GDVoltarObjects3= [];
gdjs.BiomasCode.GDMenuObjects1= [];
gdjs.BiomasCode.GDMenuObjects2= [];
gdjs.BiomasCode.GDMenuObjects3= [];


gdjs.BiomasCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Amaza"), gdjs.BiomasCode.GDAmazaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Caa"), gdjs.BiomasCode.GDCaaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cerra"), gdjs.BiomasCode.GDCerraObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pampa"), gdjs.BiomasCode.GDPampaObjects2);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BiomasCode.GDbackObjects2);
gdjs.copyArray(runtimeScene.getObjects("mata"), gdjs.BiomasCode.GDmataObjects2);
gdjs.copyArray(runtimeScene.getObjects("panta"), gdjs.BiomasCode.GDpantaObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDbackObjects2[i].getBehavior("Opacity").setOpacity(215);
}
}{for(var i = 0, len = gdjs.BiomasCode.GDAmazaObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDAmazaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.BiomasCode.GDPampaObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDPampaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.BiomasCode.GDmataObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDmataObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.BiomasCode.GDCerraObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDCerraObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.BiomasCode.GDpantaObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDpantaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.BiomasCode.GDCaaObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDCaaObjects2[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "HUD");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "HUD2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 1;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "HUD2");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "HUD");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.BiomasCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDVoltarObjects1.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDVoltarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDVoltarObjects1[k] = gdjs.BiomasCode.GDVoltarObjects1[i];
        ++k;
    }
}
gdjs.BiomasCode.GDVoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDAmazaObjects2Objects = Hashtable.newFrom({"Amaza": gdjs.BiomasCode.GDAmazaObjects2});
gdjs.BiomasCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Amaza"), gdjs.BiomasCode.GDAmazaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDAmazaObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 500, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 162, "", 0);
}{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Considerado o maior Bioma brasileiro e a maior reserva de diversidade biológica do mundo, o bioma Amazônia corresponde a quase metade do território nacional.\n\nAbrange os estados brasileiros do: Acre, Amapá, Amazonas, Pará, Roraima; parte de Rondônia, Mato Grosso, Maranhão e Tocantins.");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desc"), gdjs.BiomasCode.GDDescObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDDescObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDDescObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDDescObjects2[k] = gdjs.BiomasCode.GDDescObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDDescObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Considerado o maior Bioma brasileiro e a maior reserva de diversidade biológica do mundo, o bioma Amazônia corresponde a quase metade do território nacional.\n\nAbrange os estados brasileiros do: Acre, Amapá, Amazonas, Pará, Roraima; parte de Rondônia, Mato Grosso, Maranhão e Tocantins.");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fauna"), gdjs.BiomasCode.GDFaunaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDFaunaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDFaunaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDFaunaObjects2[k] = gdjs.BiomasCode.GDFaunaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDFaunaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Levando-se em consideração a enorme dimensão da floresta Amazônia, conhecer todas as espécies de animais não é algo simples. É amplamente aceito que a fauna e a flora amazônica não foram documentadas em sua totalidade, não há uma contagem total para a região e novas espécies são frequentemente inventariadas. A Amazônia é o bioma brasileiro com maior riqueza de espécies da fauna, abrigando mais de 73% das espécies de mamíferos e 80% das de aves existentes no território nacional.\nNo Brasil, são ao menos 311 mamíferos, 1.300 aves, 273 répteis, 232 anfíbios e 1800 peixes continentais. Nos rios podem ser encontrados mamíferos como o boto cor-de-rosa e o tucuxi, o peixe-boi da Amazônia e lontras. Em meio à floresta, pode-se encontrar onças pintadas, tamanduás, e uma quantidade enorme de primatas como macacos-prego, macacos-aranha, curiús.\n\nFonte: https://ispn.org.br/biomas/amazonia/fauna-e-flora-da-amazonia/");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.BiomasCode.GDvegetaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDvegetaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDvegetaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDvegetaObjects2[k] = gdjs.BiomasCode.GDvegetaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDvegetaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A Amazônia é conhecida principalmente por sua floresta que se destaca pela extensão que ocupa, pela robustez e diversidade da vegetação e pela beleza de flores e frutos.\nA totalidade exata de espécies ainda é um mistério, o que se sabe são estimativas que aumentam a cada dia. São mais de 2.000 espécies de plantas identificadas como de utilidade na alimentação e na medicina, bem como na produção de óleos, graxas, ceras, etc.\nA floresta amazônica é uma floresta tropical densa, formada por árvores de grande porte.\nSua vegetação pode ser dividade em:\nMata de várzea: localizada em áreas baixas, sofre inundações periódicas, conforme as cheias dos rios. Os solos da várzea são extremamente férteis devido aos sedimentos depositados pelas águas dos rios.\nMata de igapó: localizada em áreas ainda mais baixas sofre inundação permanente, por esse motivo encontra-se sempre alagada. Para sobreviver a essa condição, as plantas apresentam estratégias e adaptações diferenciadas.\nMata de terra firme: encontrada na maior parte da floresta amazônica, não sofre inundações por localizar-se em áreas mais altas. A vegetação encontrada é de maior porte, como a castanheira.\n\nFonte: https://www.todamateria.com.br/floresta-amazonica/#:~:text=Fauna,%2C%20araras%2C%20jiboia%2C%20sucuri.\nhttps://ispn.org.br/biomas/amazonia/fauna-e-flora-da-amazonia/");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hidro"), gdjs.BiomasCode.GDhidroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDhidroObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDhidroObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDhidroObjects2[k] = gdjs.BiomasCode.GDhidroObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDhidroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A maior bacia hidrográfica do Brasil e do mundo é a Bacia Amazônica, que é constituída por todos os rios, córregos, ribeirões e demais cursos de água que deságuam no rio Amazonas.\nA Bacia Amazônica possui 7 milhões de Km2 de extensão aproximadamente, no qual cerca de 4 milhões de Km2 estão no território brasileiro (que corresponde a 42% do território nacional).\nAlém do Brasil, ela abrange diversos países da América Latina: Peru, Bolívia, Colômbia, Equador, Venezuela, Guiana e Suriname\nA região abriga também a maior floresta equatorial e tropical do mundo, a Floresta Amazônica, que é extremamente rica em biodiversidade, fauna e flora, sendo responsável pelo equilíbrio ambiental e climático mundial, além de ter um excelente aproveitamento econômico e social. Também se destacam as várias espécies endêmicas, ou seja, encontradas apenas naquele bioma, que são importantes para a produção de medicamentos, cosméticos, alimentação, etc.\n\nO Rio Amazonas nasce na Cordilheira do Andes, no Peru, e tem sua bacia finalizada no Oceano Atlântico, no Brasil. É o único rio do mundo com uma foz mista.\nFonte:\nhttps://mundoeducacao.uol.com.br/geografia/bacia-amazonica.htm\nhttps://www.todamateria.com.br/bacia-amazonica/\nhttps://brasilescola.uol.com.br/brasil/bacia-amazonica.htm ");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.BiomasCode.GDclimaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDclimaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDclimaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDclimaObjects2[k] = gdjs.BiomasCode.GDclimaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDclimaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("O clima na Amazônia é caracterizado como equatorial úmido e subúmido. Apresenta temperaturas médias anuais entre 22°C e 28°C, com pouca variação ao longo do ano. As estações do ano não são tão distintas como em outras regiões, havendo apenas duas épocas bem definidas: a seca e a chuvosa.\n\nDurante a estação chuvosa, que ocorre entre dezembro e maio, há intensas precipitações pluviométricas, com médias anuais variando de 1,4 mil milímetros a 3,5 mil milímetros. Nesse período, os rios transbordam e há muitas áreas alagadas, e a umidade relativa do ar é alta, geralmente acima de 80%.\n\nNa estação seca, que vai de junho a novembro, ocorre uma diminuição significativa das chuvas, mas ainda pode haver algumas precipitações. Nesse período, os rios diminuem seu volume de água e algumas áreas podem ficar mais secas. A umidade relativa do ar tende a ser um pouco menor, cerca de 70%.\n\nFonte:\nhttps://mundoeducacao.uol.com.br/geografia/amazonia.htm#:~:text=O%20clima%20predominante%20é%20o,na%20estação%20de%20maior%20pluviosidade \nhttps://agro.estadao.com.br/summit-agro/como-sao-o-clima-e-a-vegetacao-na-floresta-amazonica");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Solo"), gdjs.BiomasCode.GDSoloObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDSoloObjects1.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDSoloObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDSoloObjects1[k] = gdjs.BiomasCode.GDSoloObjects1[i];
        ++k;
    }
}
gdjs.BiomasCode.GDSoloObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects1);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects1.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects1[i].getBehavior("Text").setText("1");
}
}}

}


};gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDPampaObjects1Objects = Hashtable.newFrom({"Pampa": gdjs.BiomasCode.GDPampaObjects1});
gdjs.BiomasCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.BiomasCode.GDclimaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDclimaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDclimaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDclimaObjects2[k] = gdjs.BiomasCode.GDclimaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDclimaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("É um clima subtropical, e ele também possui as mesmas características de um clima temperado úmido. A temperatura fica geralmente entre os 18ºC e 20ºC, mas os verões são muito quentes e os invernos são muito frios, por  causa do avanço da massa polar atlântica, podendo até mesmo nevar na região.\n\nFonte:https://brasilescola.uol.com.br/geografia/pampas.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hidro"), gdjs.BiomasCode.GDhidroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDhidroObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDhidroObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDhidroObjects2[k] = gdjs.BiomasCode.GDhidroObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDhidroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Abrange uma área que contêm duas bacias hidrográficas, sendo essas: “Bacia hidrográfica Costeira do sul” e “Bacia hidrográfica do Rio da Prata”. Tendo como principais rios: Rio Uruguai, Rio Santa Maria, Rio da prata, Rio Jacuí e Rio Vacacaí. E este bioma apresenta um grande potencial para a navegação e para energia hidrelétrica.\n\nFonte:https://www.ecycle.com.br/pampa/#:~:text=O%20Pampa%20abriga%20um%20ecossistema,verde%20e%20o%20picapauzinho%2Dchor%C3%A3o.");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.BiomasCode.GDvegetaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDvegetaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDvegetaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDvegetaObjects2[k] = gdjs.BiomasCode.GDvegetaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDvegetaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Possuí uma vegetação com predominância campestre formada por plantas herbáceas, com vários tipos de gramíneas, espécies arbustivas, assim como também é possível achar algumas matas cilares e árvores decíduas mesmo sendo encontradas em menores quantidades.\nE de acordo com o IBGE, o Instituto Brasileiro de Geografia e Estatística, esta flora apresente cerca de 1623 espécies diferentes de plantas, possuindo plantas endêmias(típicas do bioma) como nhavandaí, algarrobo, babosa-do-campo, trevo-nativo, barbas-de-bode, e mais algumas outras plantas. \n\nFonte:https://brasilescola.uol.com.br/geografia/pampas.htm ");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fauna"), gdjs.BiomasCode.GDFaunaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDFaunaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDFaunaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDFaunaObjects2[k] = gdjs.BiomasCode.GDFaunaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDFaunaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A Fauna assim como a flora é bem diversa, composta por 120 espécies de aves, 97 espécies de répteis, 74 espécies de mamíferos, 50 espécies de anfíbios e 18 espécies de peixes, de acordo com o IBGE. E também como na flora, há algumas espécies endêmicas no Pampa, como o sapinho-de-barriga-vermelha, furão, quero-quero, pica-pau-do-campo, e entre outras espécies de animais. \n\nFonte:https://brasilescola.uol.com.br/geografia/pampas.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desc"), gdjs.BiomasCode.GDDescObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDDescObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDDescObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDDescObjects2[k] = gdjs.BiomasCode.GDDescObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDDescObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("É encontrado apenas no Rio grande do Sul, o único bioma presente em apenas um estado brasileiro, este ocupa cerca de 2% do território nacional, tendo uma superfície de 178.243 km². Este bioma na américa do sul é encontrado também no Uruguai, e na argentina, tendo ao todo uma área de 750.000km².\n\nFonte:https://www.ecycle.com.br/pampa/#:~:text=O%20Pampa%20abriga%20um%20ecossistema,verde%20e%20o%20picapauzinho%2Dchor%C3%A3o.");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pampa"), gdjs.BiomasCode.GDPampaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDPampaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 5, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 709, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 620, "", 0);
}{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects1.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects1[i].getBehavior("Text").setText("É encontrado apenas no Rio grande do Sul, o único bioma presente em apenas um estado brasileiro, este ocupa cerca de 2% do território nacional, tendo uma superfície de 178.243 km². Este bioma na américa do sul é encontrado também no Uruguai, e na argentina, tendo ao todo uma área de 750.000km².\n \nFonte:https://www.ecycle.com.br/pampa/#:~:text=O%20Pampa%20abriga%20um%20ecossistema,verde%20e%20o%20picapauzinho%2Dchor%C3%A3o.");
}
}}

}


};gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDmataObjects1Objects = Hashtable.newFrom({"mata": gdjs.BiomasCode.GDmataObjects1});
gdjs.BiomasCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.BiomasCode.GDclimaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDclimaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDclimaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDclimaObjects2[k] = gdjs.BiomasCode.GDclimaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDclimaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Seu clima predominante é o tropical úmido, no entanto, existem outros microclimas ao longo da mata. Apresenta temperaturas médias elevadas durante o ano todo e a média de umidade relativa do ar também é elevada. As precipitações pluviométricas são regulares e bem distribuídas nesse bioma. Quanto ao relevo, é caracterizado por planaltos e serras.\n\nFonte: https://brasilescola.uol.com.br/brasil/mata-atlantica1.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hidro"), gdjs.BiomasCode.GDhidroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDhidroObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDhidroObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDhidroObjects2[k] = gdjs.BiomasCode.GDhidroObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDhidroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A importância hidrográfica da Mata Atlântica é grande, pois essa região abriga sete das nove maiores bacias hidrográficas do país, entre elas estão: Paraná, Uruguai, Paraíba do Sul, Doce, Jequitinhonha e São Francisco.\n\nEssa rede é importantíssima não só para o abastecimento humano mas também para o desenvolvimento de atividades econômicas, como a agricultura, a pecuária, a indústria e todo o processo de urbanização do País.\n\nFonte:https://brasilescola.uol.com.br/brasil/mata-atlantica1.htm\nhttps://www.todoestudo.com.br/geografia/mata-atlantica");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.BiomasCode.GDvegetaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDvegetaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDvegetaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDvegetaObjects2[k] = gdjs.BiomasCode.GDvegetaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDvegetaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A Mata Atlântica é composta por formações florestais nativas (Floresta Ombrófila Densa; Floresta Ombrófila Mista, também denominada de Mata de Araucárias; Floresta Ombrófila Aberta; Floresta Estacional Semidecidual; e Floresta Estacional Decidual), e ecossistemas associados (manguezais, vegetações de restingas, campos de altitude, brejos interioranos e encraves florestais do Nordeste).\nOriginalmente, o bioma ocupava mais de 1,3 milhões de km² em 17 estados do território brasileiro, estendendo-se por grande parte da costa do país. Porém, devido à ocupação e atividades humanas na região, hoje resta cerca de 29% de sua cobertura original.\nAs florestas e demais ecossistemas que compõem a Mata Atlântica são responsáveis pela produção, regulação e abastecimento de água; regulação e equilíbrio climáticos; proteção de encostas e atenuação de desastres; fertilidade e proteção do solo; produção de alimentos, madeira, fibras, óleos e remédios; além de proporcionar paisagens cênicas e preservar um patrimônio histórico e cultural imenso.\nFonte: https://antigo.mma.gov.br/biomas/mata-atlântica_emdesenvolvimento.html#:~:text=A%20Mata%20Atlântica%20é%20composta,manguezais%2C%20vegetações%20de%20restingas%2C%20campos");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fauna"), gdjs.BiomasCode.GDFaunaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDFaunaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDFaunaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDFaunaObjects2[k] = gdjs.BiomasCode.GDFaunaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDFaunaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A Mata Atlântica caracteriza-se por sua grande biodiversidade, devido, principalmente, às variações ambientais do bioma. Essas variações acontecem devido à extensão da Mata Atlântica em latitude, longitude e a variações altitudinais. Estima-se que a biodiversidade da Mata Atlântica corresponda de 1% a 8% da biodiversidade mundial.\n\nUma das espécies mais conhecidas de animais da Mata Atlântica é, sem dúvidas, o mico-leão-dourado (Leontopithecus rosalia), espécie hoje considerada símbolo desse bioma. Essa espécie é endêmica e podia ser encontrada, originalmente, em toda a região costeira do Rio de Janeiro e sul do Espirito Santo.\n\nFonte: https://brasilescola.uol.com.br/biologia/mata-atlantica.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desc"), gdjs.BiomasCode.GDDescObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDDescObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDDescObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDDescObjects2[k] = gdjs.BiomasCode.GDDescObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDDescObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("O Bioma Mata Atlântica ocupa aproximadamente 13 % do território brasileiro. Por se localizar na região litorânea, ocupada por mais de 50% da população brasileira, é o Bioma mais ameaçado do Brasil. Apenas 27% de sua cobertura ­florestal original ainda está preservada. \nFonte: https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18307-biomas-brasileiros.html");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mata"), gdjs.BiomasCode.GDmataObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDmataObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 927, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 463, "", 0);
}{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects1.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects1[i].getBehavior("Text").setText("O Bioma Mata Atlântica ocupa aproximadamente 13 % do território brasileiro. Por se localizar na região litorânea, ocupada por mais de 50% da população brasileira, é o Bioma mais ameaçado do Brasil. Apenas 27% de sua cobertura ­florestal original ainda está preservada. \nfonte: https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18307-biomas-brasileiros.html");
}
}}

}


};gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDpantaObjects1Objects = Hashtable.newFrom({"panta": gdjs.BiomasCode.GDpantaObjects1});
gdjs.BiomasCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.BiomasCode.GDclimaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDclimaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDclimaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDclimaObjects2[k] = gdjs.BiomasCode.GDclimaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDclimaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("O Pantanal está localizado em uma área de ocorrência do clima tropical, com duas estações bem definidas: o verão chuvoso e o inverno seco. Esse fato é essencial para a atividade turística da região, uma das grandes impulsionadoras da economia.\n\nAs chuvas concentram-se de outubro a março, período em que o turismo é limitado e a pesca é proibida entre novembro e fevereiro, pois coincide com a reprodução dos peixes. Nessa época, a temperatura ultrapassa os 30 ºC.\n\nEntre abril e setembro, a ausência de chuvas é marcada por belíssimas paisagens que atraem turistas de todos os cantos, tanto brasileiros quanto estrangeiros. A temperatura amena, entre os 20 ºC e 25 ºC, contribui para as atividades econômicas locais, como passeio de barco, comércio e práticas agropecuárias.\n\nFonte:https://brasilescola.uol.com.br/brasil/o-pantanal.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hidro"), gdjs.BiomasCode.GDhidroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDhidroObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDhidroObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDhidroObjects2[k] = gdjs.BiomasCode.GDhidroObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDhidroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A água no Pantanal é um fator decisivo no equilíbrio da fauna e da flora. Durante as cheias no verão, estima-se que 180 milhões de litros d’água atinjam a planície do bioma.\n\nToda essa água acumula-se na planície, formando as áreas inundadas: pântanos, brejos, lagoas e baías que se interligam aos rios. O relevo contribui para essa ligação devido a sua baixa declividade.\n\nDentre os inúmeros rios da região, podemos destacar o rio Cuiabá, rio Taquari, rio Itiquira, rio Aquidauana, além do rio Paraguai, um dos maiores da localidade.\n\nFonte: https://brasilescola.uol.com.br/brasil/o-pantanal.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.BiomasCode.GDvegetaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDvegetaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDvegetaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDvegetaObjects2[k] = gdjs.BiomasCode.GDvegetaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDvegetaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Por ser um bioma com ligações próximas à Floresta Amazônica e ao Cerrado, a paisagem pantaneira é bem diversificada, com árvores de médio e grande porte, típicas da Amazônia, mas também conta com a presença de árvores tortuosas de baixo e médio porte, muito comuns no Cerrado.\n\nNas matas ciliares, próximas dos rios, é comum encontrarmos jenipapos de 20 metros de altura, árvore amazônica. Nessa área, a vegetação é densa e exuberante, com figueiras, ingazeiros, e outras árvores altas.\n\nAs planícies inundadas do Pantanal possuem uma vegetação típica dessa localidade, como os vegetais aquáticos: aguapé, erva-de-santa-luzia, utriculária e cabomba, muitos deles utilizados para fins medicinais.\n\nNas áreas não tão alagadas, a presença de árvores do Cerrado é frequente, como os ipês e buritis.\n\nFonte:https://brasilescola.uol.com.br/brasil/o-pantanal.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fauna"), gdjs.BiomasCode.GDFaunaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDFaunaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDFaunaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDFaunaObjects2[k] = gdjs.BiomasCode.GDFaunaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDFaunaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A fauna do Pantanal é bastante diversificada. Levantamentos registraram cerca de 263 espécies de peixes, 41 espécies de anfíbios, 113 espécies de répteis, 463 espécies de aves e 132 espécies de mamíferos sendo 2 endêmicas. Jacarés, capivaras e onças estão entre os principais animais. Dentre as espécies de jacarés mais encontradas estão: o jacaré-do-Pantanal, o jacaré-comum e o jacaré-do-papo-amarelo. Os jacarés não são animais agressivos como vemos em muitos filmes, só atacam os homens quando se sentem ameaçados e sua dieta é a base de peixes.  \n\nAlém dos jacarés, é possível encontrar diferentes cobras, como a sucuri, a jararaca e a jiboia e o sinimbú, um tipo de lagarto. Existe ainda no pantanal uma infinidade de formigas, cupins, aranhas e mosquitos.\n\nA abundância de água neste grande ecossistema, é um grande diferencial do bioma pantaneiro que favorece a existência de numerosos animais aquáticos. Dentre a variedade de peixes, encontra-se pintados, pacus, dourados, piauçus e jaús. Os jaús são bagres gigantes que chegam a medir um metro e meio de comprimento e pesar 120 quilos.\n\nFonte:https://www.ibflorestas.org.br/bioma-pantanal?utm_source=google&utm_medium=cpc&utm_campaign=google-ads&keyword=pantanal%20caracteristicas&creative=473189766164&gad_source=1&gclid=EAIaIQobChMIx9j-ou7AhQMVk2FIAB0kUw03EAAYASAAEgIO7fD_BwE");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desc"), gdjs.BiomasCode.GDDescObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDDescObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDDescObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDDescObjects2[k] = gdjs.BiomasCode.GDDescObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDDescObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("O Pantanal ocupa uma área de 150.355 Km², possuindo quase 2% do território nacional e é constituído principalmente por savana estépica alagada. Este bioma está presente em apenas dois estados brasileiros: o Mato Grosso com 7% de ocupação do território e o Mato Grosso do Sul com 25%. A região é uma planície aluvial influenciada por rios que drenam a bacia do Alto Paraguai, onde se desenvolve uma fauna e flora de rara beleza e abundância.\n\nNo Pantanal, o clima é marcado pelas altas temperaturas, grande índice pluviométrico, um verão quente e chuvoso e um inverno frio e seco. Assim, o solo que se forma é utilizado como áreas de pastagens para o gado. A vegetação pantaneira, dependendo da altitude, envolve as gramíneas, árvores de médio porte, plantas rasteiras e arbustos.\n\nFonte:https://www.ibflorestas.org.br/bioma-pantanal?utm_source=google&utm_medium=cpc&utm_campaign=google-ads&keyword=pantanal%20caracteristicas&creative=473189766164&gad_source=1&gclid=EAIaIQobChMIx9j-ou7AhQMVk2FIAB0kUw03EAAYASAAEgIO7fD_BwE");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("panta"), gdjs.BiomasCode.GDpantaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDpantaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 5, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 639, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 391, "", 0);
}{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects1.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects1[i].getBehavior("Text").setText("O Pantanal ocupa uma área de 150.355 Km², possuindo quase 2% do território nacional e é constituído principalmente por savana estépica alagada. Este bioma está presente em apenas dois estados brasileiros: o Mato Grosso com 7% de ocupação do território e o Mato Grosso do Sul com 25%. A região é uma planície aluvial influenciada por rios que drenam a bacia do Alto Paraguai, onde se desenvolve uma fauna e flora de rara beleza e abundância.\n\nNo Pantanal, o clima é marcado pelas altas temperaturas, grande índice pluviométrico, um verão quente e chuvoso e um inverno frio e seco. Assim, o solo que se forma é utilizado como áreas de pastagens para o gado. A vegetação pantaneira, dependendo da altitude, envolve as gramíneas, árvores de médio porte, plantas rasteiras e arbustos.\n\nFonte:https://www.ibflorestas.org.br/bioma-pantanal?utm_source=google&utm_medium=cpc&utm_campaign=google-ads&keyword=pantanal%20caracteristicas&creative=473189766164&gad_source=1&gclid=EAIaIQobChMIx9j-ou7AhQMVk2FIAB0kUw03EAAYASAAEgIO7fD_BwE");
}
}}

}


};gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDCerraObjects1Objects = Hashtable.newFrom({"Cerra": gdjs.BiomasCode.GDCerraObjects1});
gdjs.BiomasCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.BiomasCode.GDclimaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDclimaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDclimaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDclimaObjects2[k] = gdjs.BiomasCode.GDclimaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDclimaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("O bioma Cerrado é constituído predominantemente pelo clima tropical sazonal, caracterizado por invernos secos e verões chuvosos, apresentando precipitação média de 1.500 mm. Essa precipitação varia nos limites com outros biomas. Na região do Cerrado limitante com a Caatinga, por exemplo, o índice pluviométrico encontra-se entre 600 mm a 800 mm. Já no limite com o bioma Amazônia, a precipitação alcança entre 2.000 mm a 2.200 mm.\n\nA estação definida pelo período de seca geralmente se inicia no mês de maio, finalizando-se no mês de setembro. A estação chuvosa tem início em outubro, estendendo-se até o mês de abril. Nessa estação, é comum acontecer os chamados veranicos, que são curtos períodos de seca. A temperatura média anual fica em torno de 22º C, variando as médias ao longo das estações do ano. Nos períodos de seca, a umidade do ar pode chegar a 15%, geralmente nos meses de julho e agosto. A insolação é bastante intensa e reduz-se nos períodos chuvosos em razão da alta nebulosidade.\n\nFonte: https://brasilescola.uol.com.br/brasil/cerrado.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hidro"), gdjs.BiomasCode.GDhidroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDhidroObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDhidroObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDhidroObjects2[k] = gdjs.BiomasCode.GDhidroObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDhidroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("O Cerrado – bioma e também domínio morfoclimático – é conhecido por muitos como a “caixa d'água do Brasil”. E esse apelido não é ocasional, pois a sua área abriga nascentes ou leitos de rios de oito bacias hidrográficas dentre as doze que existem no país, o que revela a importância socioambiental de suas composições.\n\nDois grandes fatores geográficos contribuem para que o Cerrado apresente essa importância ambiental: posição e relevo. O bioma encontra-se em uma região central do território brasileiro, o que contribuiu para que boa parte das bacias hidrográficas do país estivesse concentrada nele. Além disso, as altitudes presentes e o grande número de nascentes fazem com que haja um bom escoamento das águas para outras regiões, auxiliando na distribuição dos recursos hídricos.\n\nAs águas do Cerrado são importantes também para o abastecimento de aquíferos, principalmente o Aquífero guarani, que possui uma vasta área na América do Sul e com boa parte situada na área do domínio morfoclimático em questão. Por isso, a manutenção dessa importante reserva hídrica subterrânea depende da sustentabilidade desse bioma. Além disso, é válido mencionar que as águas do Pantanal também são altamente dependentes do Cerrado.\n\nFonte: https://brasilescola.uol.com.br/brasil/cerrado-caixa-dagua-brasil.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.BiomasCode.GDvegetaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDvegetaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDvegetaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDvegetaObjects2[k] = gdjs.BiomasCode.GDvegetaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDvegetaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A paisagem do bioma é predominantemente caracterizada por extensas formações savânicas, interceptadas por matas ciliares ao longo dos rios, nos fundos de vale.\nAs árvores do bioma são muito peculiares, com troncos tortos, cobertos por uma cortiça grossa, cujas folhas são geralmente grandes e rígidas. Muitas plantas herbáceas têm órgãos subterrâneos para armazenar água e nutrientes.\nO Cerrado é reconhecido como a savana com maior biodiversidade do mundo, abrigando cerca de 11.627 espécies de plantas nativas, sendo, aproximadamente, 4.400 espécies endêmicas (existentes apenas nesse bioma). Em razão da sua extensão, o bioma Cerrado não possui uma fitofisionomia (aspecto da vegetação de uma região) única. A vegetação é bastante diversificada, variando de formas campestres, como os campos limpos, a formações florestais densas, como os cerradões. Os fatores que possibilitam essa variedade de fisionomias está relacionado com os tipos de solo, tipos de clima e tipos de relevo nas regiões que abrigam o Cerrado.\n\nFontes: https://brasilescola.uol.com.br/brasil/cerrado.htm\nhttps://www.ibflorestas.org.br/bioma-cerrado?utm_source=google&utm_medium=cpc&utm_campaign=google-ads&keyword=cerrado%20vegetação&creative=465946616797&gad_source=1&gclid=EAIaIQobChMI4fub697AhQMVG2FIAB0bkgXbEAAYAiAAEgLwlvD_BwE");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fauna"), gdjs.BiomasCode.GDFaunaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDFaunaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDFaunaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDFaunaObjects2[k] = gdjs.BiomasCode.GDFaunaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDFaunaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A fauna e a flora do Cerrado são extremamente ricas: cerca de 5% de toda a biodiversidade do planeta é encontrada nesse bioma. Em virtude de tamanha diversidade, o Cerrado é considerado a savana mais rica do mundo.\n\nÉ importante destacar que o Cerrado é formado por um mosaico de vegetações, apresentando desde formações florestais até formações campestres. Além disso, é influenciado por uma série de fatores ambientais, como regime de fogo, tipo de solo e de clima. Todos esses fatores contribuem para a diversidade de espécies do Cerrado.\nFonte: https://brasilescola.uol.com.br/biologia/cerrado-1.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desc"), gdjs.BiomasCode.GDDescObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDDescObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDDescObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDDescObjects2[k] = gdjs.BiomasCode.GDDescObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDDescObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("O Bioma Cerrado ocorre principalmente no Planalto Central Brasileiro e ocupa aproximadamente 24% do território brasileiro. O Cerrado é reconhecido como a Savana mais rica do mundo em biodiversidade. Até a década de 1950, os Cerrados mantiveram-se quase inalterados. A partir da década de 1960, com a transferência da Capital Federal, do Rio de Janeiro para Brasília, e a abertura de uma nova rede rodoviária, a cobertura vegetal natural deu lugar à pecuária e à agricultura intensiva.\nFonte: https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18307-biomas-brasileiros.html");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cerra"), gdjs.BiomasCode.GDCerraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDCerraObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 800, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 331, "", 0);
}{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects1.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects1[i].getBehavior("Text").setText("O Bioma Cerrado ocorre principalmente no Planalto Central Brasileiro e ocupa aproximadamente 24% do território brasileiro. O Cerrado é reconhecido como a Savana mais rica do mundo em biodiversidade. Até a década de 1950, os Cerrados mantiveram-se quase inalterados. A partir da década de 1960, com a transferência da Capital Federal, do Rio de Janeiro para Brasília, e a abertura de uma nova rede rodoviária, a cobertura vegetal natural deu lugar à pecuária e à agricultura intensiva.\nFonte: https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18307-biomas-brasileiros.html");
}
}}

}


};gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDCaaObjects1Objects = Hashtable.newFrom({"Caa": gdjs.BiomasCode.GDCaaObjects1});
gdjs.BiomasCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.BiomasCode.GDclimaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDclimaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDclimaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDclimaObjects2[k] = gdjs.BiomasCode.GDclimaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDclimaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A Caatinga possui um clima Semiárido. Esse tipo climático é caraterizado pelas altas temperaturas e pelas irregularidades das chuvas. No geral, é um tipo climático muito seco, típico de zonas de alta pressão, com baixa nebulosidade. A umidade ao ar é muito baixa, assim como a amplitude térmica, uma vez que as temperaturas se mantêm constantemente altas e as chuvas são muito escassas.\nFonte:https://mundoeducacao.uol.com.br/geografia/caatinga.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hidro"), gdjs.BiomasCode.GDhidroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDhidroObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDhidroObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDhidroObjects2[k] = gdjs.BiomasCode.GDhidroObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDhidroObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A maior parte dos rios da Caatinga é intermitente, ou seja, trata-se de cursos de água que secam durante o período de estiagem. Essa característica é resultante do clima Semiárido da região, em especial, pela pequena ocorrência e distribuição concentrada de chuvas ao longo do ano. Dessa maneira, a rede hidrográfica da Caatinga é pequena e altamente influenciada pelas condições climáticas.\n\nNesse bioma, destacam-se dois rios perenes, o São Francisco e o Parnaíba, cujos cursos de água são permanentes ao longo de todo o ano. O rio São Francisco, o principal da região, é muito utilizado para a irrigação, sendo que a umidade advinda do rio resulta em um microclima local ao longo do seu percurso, com maior umidade e maior possibilidade de práticas agrícolas. Já o rio Parnaíba é muito importante para o consumo humano de água, em especial no norte da Caatinga.\nFonte:https://mundoeducacao.uol.com.br/geografia/caatinga.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vegeta"), gdjs.BiomasCode.GDvegetaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDvegetaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDvegetaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDvegetaObjects2[k] = gdjs.BiomasCode.GDvegetaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDvegetaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A vegetação da Caatinga apresenta características de adaptação ao longo período de seca e grande diversidade de espécies vegetais, muitas delas endêmicas (desenvolvem-se apenas nessa região).\nAs principais características da vegetação são árvores baixas, troncos tortuosos e que apresentam espinhos e folhas que caem no período da seca (com exceção de algumas espécies, como o juazeiro). O cair das folhas é um mecanismo para evitar a perda excessiva de água e também diminuir a ocorrência de processos fotossintéticos para que as plantas entrem em estágio de economia de energia. Outra característica marcante é que as raízes das plantas cobrem o solo para que seja possível armazenar água durante o período de chuva.\nA flora da Caatinga é bastante diversificada. O período de floração varia conforme a região, o regime de chuvas e a qualidade dos solos. Segundo a Embrapa, a Caatinga apresenta cerca de 1.981 espécies de plantas. Destacam-se os cactos, como o mandacaru e xique-xique; as bromélias, como a macambira; e as leguminosas, como a catingueira.\n\nFonte: https://brasilescola.uol.com.br/brasil/caatinga.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fauna"), gdjs.BiomasCode.GDFaunaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDFaunaObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDFaunaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDFaunaObjects2[k] = gdjs.BiomasCode.GDFaunaObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDFaunaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("Nessa região árida há o registro de 178 espécies de mamíferos, 590 de aves⁴, 116 de répteis⁵, 51 de anfíbios e 240 de peixes⁶. Embora o número de espécies pareça pequeno diante dos demais biomas, na Caatinga há um alto grau de endemismo e de espécies altamente adaptadas para sobreviverem nas condições de clima semiárido e com pouca disponibilidade de água. Esse é o habitat de mamíferos como: tamanduá-mirim, veado catingueiro, tatu-bola, onça-parda, jaguatirica, gato-mourisco, raposa, catitu etc.\nNa Caatinga, os invertebrados compõem um grupo especial, vasto e pouco conhecido. Eles são a base da cadeia alimentar no bioma, polinizam as plantas e servem de alimento para anfíbios, répteis, aves e pequenos mamíferos. Nesse grupo, merecem destaque as abelhas da Caatinga, que somam ao menos 187 espécies, as quais possuem características bem peculiares, com diversas delas consideradas endêmicas e raras, e com interações específicas com sua flora. \nMuito embora o bioma tenha uma rica diversidade de animais, inúmeras espécies se encontram ameaçadas de extinção, como a onça-parda, o tatu-bola e o soldadinho do Araripe. Foram contabilizadas ao menos 125 espécies ameaçadas de extinção no bioma, que considerando o elevado grau de endemismo da região, é tida como uma alta taxa. \nFonte:https://ispn.org.br/biomas/caatinga/fauna-e-flora-da-caatinga/");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desc"), gdjs.BiomasCode.GDDescObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDDescObjects2.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDDescObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDDescObjects2[k] = gdjs.BiomasCode.GDDescObjects2[i];
        ++k;
    }
}
gdjs.BiomasCode.GDDescObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects2);
{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects2[i].getBehavior("Text").setText("A Caatinga é um bioma exclusivamente brasileiro, ocupando, aproximadamente, uma área de 734.478 km2, que corresponde a cerca de 70% da Região Nordeste e 11% do território nacional. O nome “Caatinga” possui origem tupi-guarani e significa “floresta branca”. Essa denominação representa as características da vegetação desse ecossistema, cujas folhas caem no período da seca.\n\nFonte: https://brasilescola.uol.com.br/brasil/caatinga.htm");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Caa"), gdjs.BiomasCode.GDCaaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BiomasCode.mapOfGDgdjs_9546BiomasCode_9546GDCaaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TExto_Biomas"), gdjs.BiomasCode.GDTExto_9595BiomasObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(6);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 976, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 218, "", 0);
}{for(var i = 0, len = gdjs.BiomasCode.GDTExto_9595BiomasObjects1.length ;i < len;++i) {
    gdjs.BiomasCode.GDTExto_9595BiomasObjects1[i].getBehavior("Text").setText("A Caatinga é um bioma exclusivamente brasileiro, ocupando, aproximadamente, uma área de 734.478 km2, que corresponde a cerca de 70% da Região Nordeste e 11% do território nacional. O nome “Caatinga” possui origem tupi-guarani e significa “floresta branca”. Essa denominação representa as características da vegetação desse ecossistema, cujas folhas caem no período da seca.\n\nFonte: https://brasilescola.uol.com.br/brasil/caatinga.htm");
}
}}

}


};gdjs.BiomasCode.eventsList7 = function(runtimeScene) {

{


gdjs.BiomasCode.eventsList0(runtimeScene);
}


{


gdjs.BiomasCode.eventsList1(runtimeScene);
}


{


gdjs.BiomasCode.eventsList2(runtimeScene);
}


{


gdjs.BiomasCode.eventsList3(runtimeScene);
}


{


gdjs.BiomasCode.eventsList4(runtimeScene);
}


{


gdjs.BiomasCode.eventsList5(runtimeScene);
}


{


gdjs.BiomasCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.BiomasCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BiomasCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.BiomasCode.GDMenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BiomasCode.GDMenuObjects1[k] = gdjs.BiomasCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.BiomasCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.BiomasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BiomasCode.GDMapaObjects1.length = 0;
gdjs.BiomasCode.GDMapaObjects2.length = 0;
gdjs.BiomasCode.GDMapaObjects3.length = 0;
gdjs.BiomasCode.GDbackObjects1.length = 0;
gdjs.BiomasCode.GDbackObjects2.length = 0;
gdjs.BiomasCode.GDbackObjects3.length = 0;
gdjs.BiomasCode.GDTExto_9595BiomasObjects1.length = 0;
gdjs.BiomasCode.GDTExto_9595BiomasObjects2.length = 0;
gdjs.BiomasCode.GDTExto_9595BiomasObjects3.length = 0;
gdjs.BiomasCode.GDDescObjects1.length = 0;
gdjs.BiomasCode.GDDescObjects2.length = 0;
gdjs.BiomasCode.GDDescObjects3.length = 0;
gdjs.BiomasCode.GDFaunaObjects1.length = 0;
gdjs.BiomasCode.GDFaunaObjects2.length = 0;
gdjs.BiomasCode.GDFaunaObjects3.length = 0;
gdjs.BiomasCode.GDvegetaObjects1.length = 0;
gdjs.BiomasCode.GDvegetaObjects2.length = 0;
gdjs.BiomasCode.GDvegetaObjects3.length = 0;
gdjs.BiomasCode.GDhidroObjects1.length = 0;
gdjs.BiomasCode.GDhidroObjects2.length = 0;
gdjs.BiomasCode.GDhidroObjects3.length = 0;
gdjs.BiomasCode.GDclimaObjects1.length = 0;
gdjs.BiomasCode.GDclimaObjects2.length = 0;
gdjs.BiomasCode.GDclimaObjects3.length = 0;
gdjs.BiomasCode.GDSoloObjects1.length = 0;
gdjs.BiomasCode.GDSoloObjects2.length = 0;
gdjs.BiomasCode.GDSoloObjects3.length = 0;
gdjs.BiomasCode.GDFundoObjects1.length = 0;
gdjs.BiomasCode.GDFundoObjects2.length = 0;
gdjs.BiomasCode.GDFundoObjects3.length = 0;
gdjs.BiomasCode.GDverdeObjects1.length = 0;
gdjs.BiomasCode.GDverdeObjects2.length = 0;
gdjs.BiomasCode.GDverdeObjects3.length = 0;
gdjs.BiomasCode.GDrosaObjects1.length = 0;
gdjs.BiomasCode.GDrosaObjects2.length = 0;
gdjs.BiomasCode.GDrosaObjects3.length = 0;
gdjs.BiomasCode.GDVerdeCObjects1.length = 0;
gdjs.BiomasCode.GDVerdeCObjects2.length = 0;
gdjs.BiomasCode.GDVerdeCObjects3.length = 0;
gdjs.BiomasCode.GDlaranObjects1.length = 0;
gdjs.BiomasCode.GDlaranObjects2.length = 0;
gdjs.BiomasCode.GDlaranObjects3.length = 0;
gdjs.BiomasCode.GDaquela_9595corObjects1.length = 0;
gdjs.BiomasCode.GDaquela_9595corObjects2.length = 0;
gdjs.BiomasCode.GDaquela_9595corObjects3.length = 0;
gdjs.BiomasCode.GDmareloObjects1.length = 0;
gdjs.BiomasCode.GDmareloObjects2.length = 0;
gdjs.BiomasCode.GDmareloObjects3.length = 0;
gdjs.BiomasCode.GDDesc01Objects1.length = 0;
gdjs.BiomasCode.GDDesc01Objects2.length = 0;
gdjs.BiomasCode.GDDesc01Objects3.length = 0;
gdjs.BiomasCode.GDDesc02Objects1.length = 0;
gdjs.BiomasCode.GDDesc02Objects2.length = 0;
gdjs.BiomasCode.GDDesc02Objects3.length = 0;
gdjs.BiomasCode.GDDesc03Objects1.length = 0;
gdjs.BiomasCode.GDDesc03Objects2.length = 0;
gdjs.BiomasCode.GDDesc03Objects3.length = 0;
gdjs.BiomasCode.GDDesc04Objects1.length = 0;
gdjs.BiomasCode.GDDesc04Objects2.length = 0;
gdjs.BiomasCode.GDDesc04Objects3.length = 0;
gdjs.BiomasCode.GDDesc05Objects1.length = 0;
gdjs.BiomasCode.GDDesc05Objects2.length = 0;
gdjs.BiomasCode.GDDesc05Objects3.length = 0;
gdjs.BiomasCode.GDDesc06Objects1.length = 0;
gdjs.BiomasCode.GDDesc06Objects2.length = 0;
gdjs.BiomasCode.GDDesc06Objects3.length = 0;
gdjs.BiomasCode.GDAmazaObjects1.length = 0;
gdjs.BiomasCode.GDAmazaObjects2.length = 0;
gdjs.BiomasCode.GDAmazaObjects3.length = 0;
gdjs.BiomasCode.GDPampaObjects1.length = 0;
gdjs.BiomasCode.GDPampaObjects2.length = 0;
gdjs.BiomasCode.GDPampaObjects3.length = 0;
gdjs.BiomasCode.GDmataObjects1.length = 0;
gdjs.BiomasCode.GDmataObjects2.length = 0;
gdjs.BiomasCode.GDmataObjects3.length = 0;
gdjs.BiomasCode.GDpantaObjects1.length = 0;
gdjs.BiomasCode.GDpantaObjects2.length = 0;
gdjs.BiomasCode.GDpantaObjects3.length = 0;
gdjs.BiomasCode.GDCerraObjects1.length = 0;
gdjs.BiomasCode.GDCerraObjects2.length = 0;
gdjs.BiomasCode.GDCerraObjects3.length = 0;
gdjs.BiomasCode.GDCaaObjects1.length = 0;
gdjs.BiomasCode.GDCaaObjects2.length = 0;
gdjs.BiomasCode.GDCaaObjects3.length = 0;
gdjs.BiomasCode.GDVoltarObjects1.length = 0;
gdjs.BiomasCode.GDVoltarObjects2.length = 0;
gdjs.BiomasCode.GDVoltarObjects3.length = 0;
gdjs.BiomasCode.GDMenuObjects1.length = 0;
gdjs.BiomasCode.GDMenuObjects2.length = 0;
gdjs.BiomasCode.GDMenuObjects3.length = 0;

gdjs.BiomasCode.eventsList7(runtimeScene);

return;

}

gdjs['BiomasCode'] = gdjs.BiomasCode;
