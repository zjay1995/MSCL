NDSummary.OnToolTipsLoaded("CClass:InertialNodeFeatures",{523:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype523\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype525\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialNodeFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a InertialNodeFeatures object.</div></div>",527:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype527\" class=\"NDPrototype NoParameterForm\">InertialNodeInfo m_nodeInfo</div><div class=\"TTSummary\">The InertialNodeInfo object containing basic information retreived from eeprom about the InertialNode.</div></div>",529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype529\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;InertialNodeFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a InertialNodeFeatures pointer based on the given parameters.</div></div>",530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype530\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the uint16 descriptor value is a Channel field or not.</div></div>",531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype531\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCategory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not a given InertialTypes::InertialCategory is supported by the InertialNode.</div></div>",532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype532\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">commandId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given InertialTypes::Command is supported by the InertialNode.</div></div>",533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype533\" class=\"NDPrototype NoParameterForm\">InertialTypes::InertialCommands supportedCommands() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported &lt;InertialTypes::InertialCommands&gt; that are supported by the InertialNode.</div></div>",534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype534\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialTypes::InertialChannelFields supportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported channel fields for a given InertialTypes::InertialCategory.</div></div>",535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype535\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for a given InertialTypes::InertialCategory.</div></div>"});