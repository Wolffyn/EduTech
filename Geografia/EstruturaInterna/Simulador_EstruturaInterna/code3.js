gdjs.Nucleo_95externoCode = {};
gdjs.Nucleo_95externoCode.GDVoltarObjects1= [];
gdjs.Nucleo_95externoCode.GDVoltarObjects2= [];
gdjs.Nucleo_95externoCode.GDFundoObjects1= [];
gdjs.Nucleo_95externoCode.GDFundoObjects2= [];
gdjs.Nucleo_95externoCode.GDtextObjects1= [];
gdjs.Nucleo_95externoCode.GDtextObjects2= [];
gdjs.Nucleo_95externoCode.GDNewSpriteObjects1= [];
gdjs.Nucleo_95externoCode.GDNewSpriteObjects2= [];


gdjs.Nucleo_95externoCode.mapOfGDgdjs_9546Nucleo_959595externoCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.Nucleo_95externoCode.GDVoltarObjects1});
gdjs.Nucleo_95externoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.Nucleo_95externoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nucleo_95externoCode.mapOfGDgdjs_9546Nucleo_959595externoCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.Nucleo_95externoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nucleo_95externoCode.GDVoltarObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDVoltarObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDFundoObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDFundoObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDtextObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDtextObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDNewSpriteObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDNewSpriteObjects2.length = 0;

gdjs.Nucleo_95externoCode.eventsList0(runtimeScene);

return;

}

gdjs['Nucleo_95externoCode'] = gdjs.Nucleo_95externoCode;
