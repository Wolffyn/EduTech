gdjs.movimento_32transformanteCode = {};
gdjs.movimento_32transformanteCode.localVariables = [];
gdjs.movimento_32transformanteCode.GDVoltarObjects1= [];
gdjs.movimento_32transformanteCode.GDVoltarObjects2= [];
gdjs.movimento_32transformanteCode.GDVoltarObjects3= [];
gdjs.movimento_32transformanteCode.GDFundoObjects1= [];
gdjs.movimento_32transformanteCode.GDFundoObjects2= [];
gdjs.movimento_32transformanteCode.GDFundoObjects3= [];
gdjs.movimento_32transformanteCode.GDtext_9595transformanteObjects1= [];
gdjs.movimento_32transformanteCode.GDtext_9595transformanteObjects2= [];
gdjs.movimento_32transformanteCode.GDtext_9595transformanteObjects3= [];
gdjs.movimento_32transformanteCode.GDNewSpriteObjects1= [];
gdjs.movimento_32transformanteCode.GDNewSpriteObjects2= [];
gdjs.movimento_32transformanteCode.GDNewSpriteObjects3= [];
gdjs.movimento_32transformanteCode.GDFalha_9595de_9595San_9595AndreasObjects1= [];
gdjs.movimento_32transformanteCode.GDFalha_9595de_9595San_9595AndreasObjects2= [];
gdjs.movimento_32transformanteCode.GDFalha_9595de_9595San_9595AndreasObjects3= [];
gdjs.movimento_32transformanteCode.GDNewSprite2Objects1= [];
gdjs.movimento_32transformanteCode.GDNewSprite2Objects2= [];
gdjs.movimento_32transformanteCode.GDNewSprite2Objects3= [];
gdjs.movimento_32transformanteCode.GDTerremoto_9595de_9595Sao_9595franciscoObjects1= [];
gdjs.movimento_32transformanteCode.GDTerremoto_9595de_9595Sao_9595franciscoObjects2= [];
gdjs.movimento_32transformanteCode.GDTerremoto_9595de_9595Sao_9595franciscoObjects3= [];
gdjs.movimento_32transformanteCode.GDSoundButtonObjects1= [];
gdjs.movimento_32transformanteCode.GDSoundButtonObjects2= [];
gdjs.movimento_32transformanteCode.GDSoundButtonObjects3= [];


gdjs.movimento_32transformanteCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.movimento_32transformanteCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.movimento_32transformanteCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.movimento_32transformanteCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{for(var i = 0, len = gdjs.movimento_32transformanteCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.movimento_32transformanteCode.GDSoundButtonObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.movimento_32transformanteCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.movimento_32transformanteCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.movimento_32transformanteCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{for(var i = 0, len = gdjs.movimento_32transformanteCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.movimento_32transformanteCode.GDSoundButtonObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.movimento_32transformanteCode.eventsList1 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12190028);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12190476);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12192100);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.movimento_32transformanteCode.mapOfGDgdjs_9546movimento_959532transformanteCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.movimento_32transformanteCode.GDVoltarObjects1});
gdjs.movimento_32transformanteCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Delay");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "saiba mais_transform.mp3", 1, false, 50, 1);
}}

}


{


gdjs.movimento_32transformanteCode.eventsList0(runtimeScene);
}


{


gdjs.movimento_32transformanteCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.movimento_32transformanteCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.movimento_32transformanteCode.mapOfGDgdjs_9546movimento_959532transformanteCode_9546GDVoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12192700);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12193900);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};

gdjs.movimento_32transformanteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.movimento_32transformanteCode.GDVoltarObjects1.length = 0;
gdjs.movimento_32transformanteCode.GDVoltarObjects2.length = 0;
gdjs.movimento_32transformanteCode.GDVoltarObjects3.length = 0;
gdjs.movimento_32transformanteCode.GDFundoObjects1.length = 0;
gdjs.movimento_32transformanteCode.GDFundoObjects2.length = 0;
gdjs.movimento_32transformanteCode.GDFundoObjects3.length = 0;
gdjs.movimento_32transformanteCode.GDtext_9595transformanteObjects1.length = 0;
gdjs.movimento_32transformanteCode.GDtext_9595transformanteObjects2.length = 0;
gdjs.movimento_32transformanteCode.GDtext_9595transformanteObjects3.length = 0;
gdjs.movimento_32transformanteCode.GDNewSpriteObjects1.length = 0;
gdjs.movimento_32transformanteCode.GDNewSpriteObjects2.length = 0;
gdjs.movimento_32transformanteCode.GDNewSpriteObjects3.length = 0;
gdjs.movimento_32transformanteCode.GDFalha_9595de_9595San_9595AndreasObjects1.length = 0;
gdjs.movimento_32transformanteCode.GDFalha_9595de_9595San_9595AndreasObjects2.length = 0;
gdjs.movimento_32transformanteCode.GDFalha_9595de_9595San_9595AndreasObjects3.length = 0;
gdjs.movimento_32transformanteCode.GDNewSprite2Objects1.length = 0;
gdjs.movimento_32transformanteCode.GDNewSprite2Objects2.length = 0;
gdjs.movimento_32transformanteCode.GDNewSprite2Objects3.length = 0;
gdjs.movimento_32transformanteCode.GDTerremoto_9595de_9595Sao_9595franciscoObjects1.length = 0;
gdjs.movimento_32transformanteCode.GDTerremoto_9595de_9595Sao_9595franciscoObjects2.length = 0;
gdjs.movimento_32transformanteCode.GDTerremoto_9595de_9595Sao_9595franciscoObjects3.length = 0;
gdjs.movimento_32transformanteCode.GDSoundButtonObjects1.length = 0;
gdjs.movimento_32transformanteCode.GDSoundButtonObjects2.length = 0;
gdjs.movimento_32transformanteCode.GDSoundButtonObjects3.length = 0;

gdjs.movimento_32transformanteCode.eventsList2(runtimeScene);

return;

}

gdjs['movimento_32transformanteCode'] = gdjs.movimento_32transformanteCode;
