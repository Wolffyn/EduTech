gdjs.Mapa_32hidroCode = {};
gdjs.Mapa_32hidroCode.GDmapaaguiObjects1= [];
gdjs.Mapa_32hidroCode.GDmapaaguiObjects2= [];
gdjs.Mapa_32hidroCode.GDmapabaciasObjects1= [];
gdjs.Mapa_32hidroCode.GDmapabaciasObjects2= [];
gdjs.Mapa_32hidroCode.GDaguiObjects1= [];
gdjs.Mapa_32hidroCode.GDaguiObjects2= [];
gdjs.Mapa_32hidroCode.GDbaciasObjects1= [];
gdjs.Mapa_32hidroCode.GDbaciasObjects2= [];
gdjs.Mapa_32hidroCode.GDmenuObjects1= [];
gdjs.Mapa_32hidroCode.GDmenuObjects2= [];
gdjs.Mapa_32hidroCode.GDTaObjects1= [];
gdjs.Mapa_32hidroCode.GDTaObjects2= [];


gdjs.Mapa_32hidroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ta"), gdjs.Mapa_32hidroCode.GDTaObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapaagui"), gdjs.Mapa_32hidroCode.GDmapaaguiObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapabacias"), gdjs.Mapa_32hidroCode.GDmapabaciasObjects1);
{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDmapaaguiObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDmapaaguiObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDmapabaciasObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDmapabaciasObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDTaObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDTaObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("agui"), gdjs.Mapa_32hidroCode.GDaguiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Mapa_32hidroCode.GDaguiObjects1.length;i<l;++i) {
    if ( gdjs.Mapa_32hidroCode.GDaguiObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Mapa_32hidroCode.GDaguiObjects1[k] = gdjs.Mapa_32hidroCode.GDaguiObjects1[i];
        ++k;
    }
}
gdjs.Mapa_32hidroCode.GDaguiObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ta"), gdjs.Mapa_32hidroCode.GDTaObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapaagui"), gdjs.Mapa_32hidroCode.GDmapaaguiObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapabacias"), gdjs.Mapa_32hidroCode.GDmapabaciasObjects1);
{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDmapaaguiObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDmapaaguiObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDmapabaciasObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDmapabaciasObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDTaObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDTaObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bacias"), gdjs.Mapa_32hidroCode.GDbaciasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Mapa_32hidroCode.GDbaciasObjects1.length;i<l;++i) {
    if ( gdjs.Mapa_32hidroCode.GDbaciasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Mapa_32hidroCode.GDbaciasObjects1[k] = gdjs.Mapa_32hidroCode.GDbaciasObjects1[i];
        ++k;
    }
}
gdjs.Mapa_32hidroCode.GDbaciasObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ta"), gdjs.Mapa_32hidroCode.GDTaObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapaagui"), gdjs.Mapa_32hidroCode.GDmapaaguiObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapabacias"), gdjs.Mapa_32hidroCode.GDmapabaciasObjects1);
{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDmapabaciasObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDmapabaciasObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDmapaaguiObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDmapaaguiObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Mapa_32hidroCode.GDTaObjects1.length ;i < len;++i) {
    gdjs.Mapa_32hidroCode.GDTaObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Mapa_32hidroCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Mapa_32hidroCode.GDmenuObjects1.length;i<l;++i) {
    if ( gdjs.Mapa_32hidroCode.GDmenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Mapa_32hidroCode.GDmenuObjects1[k] = gdjs.Mapa_32hidroCode.GDmenuObjects1[i];
        ++k;
    }
}
gdjs.Mapa_32hidroCode.GDmenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.Mapa_32hidroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mapa_32hidroCode.GDmapaaguiObjects1.length = 0;
gdjs.Mapa_32hidroCode.GDmapaaguiObjects2.length = 0;
gdjs.Mapa_32hidroCode.GDmapabaciasObjects1.length = 0;
gdjs.Mapa_32hidroCode.GDmapabaciasObjects2.length = 0;
gdjs.Mapa_32hidroCode.GDaguiObjects1.length = 0;
gdjs.Mapa_32hidroCode.GDaguiObjects2.length = 0;
gdjs.Mapa_32hidroCode.GDbaciasObjects1.length = 0;
gdjs.Mapa_32hidroCode.GDbaciasObjects2.length = 0;
gdjs.Mapa_32hidroCode.GDmenuObjects1.length = 0;
gdjs.Mapa_32hidroCode.GDmenuObjects2.length = 0;
gdjs.Mapa_32hidroCode.GDTaObjects1.length = 0;
gdjs.Mapa_32hidroCode.GDTaObjects2.length = 0;

gdjs.Mapa_32hidroCode.eventsList0(runtimeScene);

return;

}

gdjs['Mapa_32hidroCode'] = gdjs.Mapa_32hidroCode;
