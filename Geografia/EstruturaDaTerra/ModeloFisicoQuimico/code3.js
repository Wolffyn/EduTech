gdjs.Nucleo_95externoCode = {};
gdjs.Nucleo_95externoCode.localVariables = [];
gdjs.Nucleo_95externoCode.GDVoltarObjects1= [];
gdjs.Nucleo_95externoCode.GDVoltarObjects2= [];
gdjs.Nucleo_95externoCode.GDVoltarObjects3= [];
gdjs.Nucleo_95externoCode.GDFundoObjects1= [];
gdjs.Nucleo_95externoCode.GDFundoObjects2= [];
gdjs.Nucleo_95externoCode.GDFundoObjects3= [];
gdjs.Nucleo_95externoCode.GDtextObjects1= [];
gdjs.Nucleo_95externoCode.GDtextObjects2= [];
gdjs.Nucleo_95externoCode.GDtextObjects3= [];
gdjs.Nucleo_95externoCode.GDNewSpriteObjects1= [];
gdjs.Nucleo_95externoCode.GDNewSpriteObjects2= [];
gdjs.Nucleo_95externoCode.GDNewSpriteObjects3= [];
gdjs.Nucleo_95externoCode.GDSoundButtonObjects1= [];
gdjs.Nucleo_95externoCode.GDSoundButtonObjects2= [];
gdjs.Nucleo_95externoCode.GDSoundButtonObjects3= [];


gdjs.Nucleo_95externoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.Nucleo_95externoCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.Nucleo_95externoCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.Nucleo_95externoCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.Nucleo_95externoCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.Nucleo_95externoCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.Nucleo_95externoCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.Nucleo_95externoCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.Nucleo_95externoCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.Nucleo_95externoCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.Nucleo_95externoCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.Nucleo_95externoCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12309292);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12309740);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12311364);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.Nucleo_95externoCode.mapOfGDgdjs_9546Nucleo_959595externoCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.Nucleo_95externoCode.GDVoltarObjects1});
gdjs.Nucleo_95externoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "3. nucleo externo saber mais.mp3", 1, false, 50, 1);
}}

}


{


gdjs.Nucleo_95externoCode.eventsList0(runtimeScene);
}


{


gdjs.Nucleo_95externoCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.Nucleo_95externoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Nucleo_95externoCode.mapOfGDgdjs_9546Nucleo_959595externoCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12311964);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12313164);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.Nucleo_95externoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nucleo_95externoCode.GDVoltarObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDVoltarObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDVoltarObjects3.length = 0;
gdjs.Nucleo_95externoCode.GDFundoObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDFundoObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDFundoObjects3.length = 0;
gdjs.Nucleo_95externoCode.GDtextObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDtextObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDtextObjects3.length = 0;
gdjs.Nucleo_95externoCode.GDNewSpriteObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDNewSpriteObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDNewSpriteObjects3.length = 0;
gdjs.Nucleo_95externoCode.GDSoundButtonObjects1.length = 0;
gdjs.Nucleo_95externoCode.GDSoundButtonObjects2.length = 0;
gdjs.Nucleo_95externoCode.GDSoundButtonObjects3.length = 0;

gdjs.Nucleo_95externoCode.eventsList2(runtimeScene);

return;

}

gdjs['Nucleo_95externoCode'] = gdjs.Nucleo_95externoCode;
