gdjs.ClimaCode = {};
gdjs.ClimaCode.GDclimaObjects1= [];
gdjs.ClimaCode.GDclimaObjects2= [];
gdjs.ClimaCode.GDzonaObjects1= [];
gdjs.ClimaCode.GDzonaObjects2= [];
gdjs.ClimaCode.GDTipoObjects1= [];
gdjs.ClimaCode.GDTipoObjects2= [];
gdjs.ClimaCode.GDZonaObjects1= [];
gdjs.ClimaCode.GDZonaObjects2= [];
gdjs.ClimaCode.GDMenuObjects1= [];
gdjs.ClimaCode.GDMenuObjects2= [];


gdjs.ClimaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.ClimaCode.GDclimaObjects1);
gdjs.copyArray(runtimeScene.getObjects("zona"), gdjs.ClimaCode.GDzonaObjects1);
{for(var i = 0, len = gdjs.ClimaCode.GDzonaObjects1.length ;i < len;++i) {
    gdjs.ClimaCode.GDzonaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClimaCode.GDclimaObjects1.length ;i < len;++i) {
    gdjs.ClimaCode.GDclimaObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tipo"), gdjs.ClimaCode.GDTipoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClimaCode.GDTipoObjects1.length;i<l;++i) {
    if ( gdjs.ClimaCode.GDTipoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ClimaCode.GDTipoObjects1[k] = gdjs.ClimaCode.GDTipoObjects1[i];
        ++k;
    }
}
gdjs.ClimaCode.GDTipoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.ClimaCode.GDclimaObjects1);
gdjs.copyArray(runtimeScene.getObjects("zona"), gdjs.ClimaCode.GDzonaObjects1);
{for(var i = 0, len = gdjs.ClimaCode.GDclimaObjects1.length ;i < len;++i) {
    gdjs.ClimaCode.GDclimaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClimaCode.GDzonaObjects1.length ;i < len;++i) {
    gdjs.ClimaCode.GDzonaObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zona"), gdjs.ClimaCode.GDZonaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClimaCode.GDZonaObjects1.length;i<l;++i) {
    if ( gdjs.ClimaCode.GDZonaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ClimaCode.GDZonaObjects1[k] = gdjs.ClimaCode.GDZonaObjects1[i];
        ++k;
    }
}
gdjs.ClimaCode.GDZonaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clima"), gdjs.ClimaCode.GDclimaObjects1);
gdjs.copyArray(runtimeScene.getObjects("zona"), gdjs.ClimaCode.GDzonaObjects1);
{for(var i = 0, len = gdjs.ClimaCode.GDzonaObjects1.length ;i < len;++i) {
    gdjs.ClimaCode.GDzonaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClimaCode.GDclimaObjects1.length ;i < len;++i) {
    gdjs.ClimaCode.GDclimaObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.ClimaCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ClimaCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.ClimaCode.GDMenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ClimaCode.GDMenuObjects1[k] = gdjs.ClimaCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.ClimaCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.ClimaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClimaCode.GDclimaObjects1.length = 0;
gdjs.ClimaCode.GDclimaObjects2.length = 0;
gdjs.ClimaCode.GDzonaObjects1.length = 0;
gdjs.ClimaCode.GDzonaObjects2.length = 0;
gdjs.ClimaCode.GDTipoObjects1.length = 0;
gdjs.ClimaCode.GDTipoObjects2.length = 0;
gdjs.ClimaCode.GDZonaObjects1.length = 0;
gdjs.ClimaCode.GDZonaObjects2.length = 0;
gdjs.ClimaCode.GDMenuObjects1.length = 0;
gdjs.ClimaCode.GDMenuObjects2.length = 0;

gdjs.ClimaCode.eventsList0(runtimeScene);

return;

}

gdjs['ClimaCode'] = gdjs.ClimaCode;
