gdjs.MantoCode = {};
gdjs.MantoCode.GDVoltarObjects1= [];
gdjs.MantoCode.GDVoltarObjects2= [];
gdjs.MantoCode.GDVoltarObjects3= [];
gdjs.MantoCode.GDFundoObjects1= [];
gdjs.MantoCode.GDFundoObjects2= [];
gdjs.MantoCode.GDFundoObjects3= [];
gdjs.MantoCode.GDtextObjects1= [];
gdjs.MantoCode.GDtextObjects2= [];
gdjs.MantoCode.GDtextObjects3= [];
gdjs.MantoCode.GDSoundButtonObjects1= [];
gdjs.MantoCode.GDSoundButtonObjects2= [];
gdjs.MantoCode.GDSoundButtonObjects3= [];


gdjs.MantoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MantoCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.MantoCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.MantoCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.MantoCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.MantoCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MantoCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.MantoCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.MantoCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.MantoCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.MantoCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.MantoCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10971876);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10997412);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10989860);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.MantoCode.mapOfGDgdjs_9546MantoCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.MantoCode.GDVoltarObjects1});
gdjs.MantoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "2. manto saber mais.mp3", 1, false, 50, 1);
}}

}


{


gdjs.MantoCode.eventsList0(runtimeScene);
}


{


gdjs.MantoCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.MantoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MantoCode.mapOfGDgdjs_9546MantoCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10986644);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10964860);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.MantoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MantoCode.GDVoltarObjects1.length = 0;
gdjs.MantoCode.GDVoltarObjects2.length = 0;
gdjs.MantoCode.GDVoltarObjects3.length = 0;
gdjs.MantoCode.GDFundoObjects1.length = 0;
gdjs.MantoCode.GDFundoObjects2.length = 0;
gdjs.MantoCode.GDFundoObjects3.length = 0;
gdjs.MantoCode.GDtextObjects1.length = 0;
gdjs.MantoCode.GDtextObjects2.length = 0;
gdjs.MantoCode.GDtextObjects3.length = 0;
gdjs.MantoCode.GDSoundButtonObjects1.length = 0;
gdjs.MantoCode.GDSoundButtonObjects2.length = 0;
gdjs.MantoCode.GDSoundButtonObjects3.length = 0;

gdjs.MantoCode.eventsList2(runtimeScene);

return;

}

gdjs['MantoCode'] = gdjs.MantoCode;
