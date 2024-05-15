gdjs.Nucleo_95internoCode = {};
gdjs.Nucleo_95internoCode.GDVoltarObjects1= [];
gdjs.Nucleo_95internoCode.GDVoltarObjects2= [];
gdjs.Nucleo_95internoCode.GDFundoObjects1= [];
gdjs.Nucleo_95internoCode.GDFundoObjects2= [];
gdjs.Nucleo_95internoCode.GDtext1Objects1= [];
gdjs.Nucleo_95internoCode.GDtext1Objects2= [];


gdjs.Nucleo_95internoCode.mapOfGDgdjs_9546Nucleo_959595internoCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.Nucleo_95internoCode.GDVoltarObjects1});
gdjs.Nucleo_95internoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.Nucleo_95internoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nucleo_95internoCode.mapOfGDgdjs_9546Nucleo_959595internoCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.Nucleo_95internoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nucleo_95internoCode.GDVoltarObjects1.length = 0;
gdjs.Nucleo_95internoCode.GDVoltarObjects2.length = 0;
gdjs.Nucleo_95internoCode.GDFundoObjects1.length = 0;
gdjs.Nucleo_95internoCode.GDFundoObjects2.length = 0;
gdjs.Nucleo_95internoCode.GDtext1Objects1.length = 0;
gdjs.Nucleo_95internoCode.GDtext1Objects2.length = 0;

gdjs.Nucleo_95internoCode.eventsList0(runtimeScene);

return;

}

gdjs['Nucleo_95internoCode'] = gdjs.Nucleo_95internoCode;
