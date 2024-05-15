gdjs.MantoCode = {};
gdjs.MantoCode.GDVoltarObjects1= [];
gdjs.MantoCode.GDVoltarObjects2= [];
gdjs.MantoCode.GDFundoObjects1= [];
gdjs.MantoCode.GDFundoObjects2= [];
gdjs.MantoCode.GDtextObjects1= [];
gdjs.MantoCode.GDtextObjects2= [];


gdjs.MantoCode.mapOfGDgdjs_9546MantoCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.MantoCode.GDVoltarObjects1});
gdjs.MantoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.MantoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MantoCode.mapOfGDgdjs_9546MantoCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.MantoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MantoCode.GDVoltarObjects1.length = 0;
gdjs.MantoCode.GDVoltarObjects2.length = 0;
gdjs.MantoCode.GDFundoObjects1.length = 0;
gdjs.MantoCode.GDFundoObjects2.length = 0;
gdjs.MantoCode.GDtextObjects1.length = 0;
gdjs.MantoCode.GDtextObjects2.length = 0;

gdjs.MantoCode.eventsList0(runtimeScene);

return;

}

gdjs['MantoCode'] = gdjs.MantoCode;
