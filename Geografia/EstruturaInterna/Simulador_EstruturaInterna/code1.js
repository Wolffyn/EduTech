gdjs.CrostaCode = {};
gdjs.CrostaCode.GDVoltarObjects1= [];
gdjs.CrostaCode.GDVoltarObjects2= [];
gdjs.CrostaCode.GDFundoObjects1= [];
gdjs.CrostaCode.GDFundoObjects2= [];
gdjs.CrostaCode.GDtextObjects1= [];
gdjs.CrostaCode.GDtextObjects2= [];
gdjs.CrostaCode.GDNewSpriteObjects1= [];
gdjs.CrostaCode.GDNewSpriteObjects2= [];


gdjs.CrostaCode.mapOfGDgdjs_9546CrostaCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.CrostaCode.GDVoltarObjects1});
gdjs.CrostaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.CrostaCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CrostaCode.mapOfGDgdjs_9546CrostaCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.CrostaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CrostaCode.GDVoltarObjects1.length = 0;
gdjs.CrostaCode.GDVoltarObjects2.length = 0;
gdjs.CrostaCode.GDFundoObjects1.length = 0;
gdjs.CrostaCode.GDFundoObjects2.length = 0;
gdjs.CrostaCode.GDtextObjects1.length = 0;
gdjs.CrostaCode.GDtextObjects2.length = 0;
gdjs.CrostaCode.GDNewSpriteObjects1.length = 0;
gdjs.CrostaCode.GDNewSpriteObjects2.length = 0;

gdjs.CrostaCode.eventsList0(runtimeScene);

return;

}

gdjs['CrostaCode'] = gdjs.CrostaCode;
