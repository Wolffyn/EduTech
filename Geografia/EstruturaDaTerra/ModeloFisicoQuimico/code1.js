gdjs.CrostaCode = {};
gdjs.CrostaCode.localVariables = [];
gdjs.CrostaCode.GDVoltarObjects1= [];
gdjs.CrostaCode.GDVoltarObjects2= [];
gdjs.CrostaCode.GDVoltarObjects3= [];
gdjs.CrostaCode.GDFundoObjects1= [];
gdjs.CrostaCode.GDFundoObjects2= [];
gdjs.CrostaCode.GDFundoObjects3= [];
gdjs.CrostaCode.GDtextObjects1= [];
gdjs.CrostaCode.GDtextObjects2= [];
gdjs.CrostaCode.GDtextObjects3= [];
gdjs.CrostaCode.GDNewSpriteObjects1= [];
gdjs.CrostaCode.GDNewSpriteObjects2= [];
gdjs.CrostaCode.GDNewSpriteObjects3= [];
gdjs.CrostaCode.GDSoundButtonObjects1= [];
gdjs.CrostaCode.GDSoundButtonObjects2= [];
gdjs.CrostaCode.GDSoundButtonObjects3= [];


gdjs.CrostaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.CrostaCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.CrostaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.CrostaCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.CrostaCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.CrostaCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.CrostaCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.CrostaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.CrostaCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.CrostaCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.CrostaCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.CrostaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Delay") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12257396);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Delay") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12257844);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "n");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12259468);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.CrostaCode.mapOfGDgdjs_9546CrostaCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.CrostaCode.GDVoltarObjects1});
gdjs.CrostaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "1. crosta saber mais.mp3", 1, false, 50, 1);
}}

}


{


gdjs.CrostaCode.eventsList0(runtimeScene);
}


{


gdjs.CrostaCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.CrostaCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CrostaCode.mapOfGDgdjs_9546CrostaCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12260068);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12261268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.CrostaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CrostaCode.GDVoltarObjects1.length = 0;
gdjs.CrostaCode.GDVoltarObjects2.length = 0;
gdjs.CrostaCode.GDVoltarObjects3.length = 0;
gdjs.CrostaCode.GDFundoObjects1.length = 0;
gdjs.CrostaCode.GDFundoObjects2.length = 0;
gdjs.CrostaCode.GDFundoObjects3.length = 0;
gdjs.CrostaCode.GDtextObjects1.length = 0;
gdjs.CrostaCode.GDtextObjects2.length = 0;
gdjs.CrostaCode.GDtextObjects3.length = 0;
gdjs.CrostaCode.GDNewSpriteObjects1.length = 0;
gdjs.CrostaCode.GDNewSpriteObjects2.length = 0;
gdjs.CrostaCode.GDNewSpriteObjects3.length = 0;
gdjs.CrostaCode.GDSoundButtonObjects1.length = 0;
gdjs.CrostaCode.GDSoundButtonObjects2.length = 0;
gdjs.CrostaCode.GDSoundButtonObjects3.length = 0;

gdjs.CrostaCode.eventsList2(runtimeScene);

return;

}

gdjs['CrostaCode'] = gdjs.CrostaCode;
