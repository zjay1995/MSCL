NDSummary.OnToolTipsLoaded("CClass:BaseStationConfig",{2690:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2690\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationConfig</div></div></div><div class=\"TTSummary\">Class used for setting the configuration of BaseStations.&nbsp; Set all the configuration values that you want to change, then verify and apply them to a BaseStation.</div></div>",2692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2692\" class=\"NDPrototype NoParameterForm\">BaseStationConfig()</div><div class=\"TTSummary\">Creates a blank BaseStationConfig.</div></div>",2694:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2694\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;WirelessTypes::TransmitPower&gt; m_transmitPower</div><div class=\"TTSummary\">The WirelessTypes::TransmitPower to set.</div></div>",2695:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2695\" class=\"NDPrototype NoParameterForm\">ButtonMap m_btnsLongPress</div><div class=\"TTSummary\">The &lt;ButtonMap&gt; for long press actions.</div></div>",2696:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2696\" class=\"NDPrototype NoParameterForm\">ButtonMap m_btnsShortPress</div><div class=\"TTSummary\">The &lt;ButtonMap&gt; for short press actions.</div></div>",2697:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2697\" class=\"NDPrototype NoParameterForm\">AnalogPairMap m_analogPairs</div><div class=\"TTSummary\">The &lt;AnalogPairMap&gt; holding all analog pairs to set</div></div>",2698:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2698\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">bool</span>&gt; m_analogPairingEnable</div><div class=\"TTSummary\">The analog pairing enable master option to set.</div></div>",2699:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2699\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">uint16</span>&gt; m_analogTimeoutTime</div><div class=\"TTSummary\">The analog timeout time (in seconds) to set.</div></div>",2700:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2700\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">float</span>&gt; m_analogTimeoutVoltage</div><div class=\"TTSummary\">The analog timeout voltage to set.</div></div>",2701:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2701\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">bool</span>&gt; m_analogExceedanceEnable</div><div class=\"TTSummary\">The analog exceedance enable option to set.</div></div>",2703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2703\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">void</span> checkValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::</td><td class=\"PType\">optional&lt;T&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">opt,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">valueName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Throws an exception if an optional value isn\'t set.</div></div>",2704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2704\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">bool</span> isSet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::</td><td class=\"PType\">optional&lt;T&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">opt</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the optional value is set.</div></div>",2705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2705\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verify(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationFeatures&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">features,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the current settings are ok to be written to a given BaseStation.</div></div>",2706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2706\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> apply(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationFeatures&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">features,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Writes all of the configuration values that are set to a WirelessNode.</div></div>",2707:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2707\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower transmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::TransmitPower value in the Config, if set.</div></div>",2708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2708\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> transmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::TransmitPower value in the Config.</div></div>",2709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2709\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton buttonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationButton value in the Config for performing a long press on a specific button, if set.</div></div>",2710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2710\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> buttonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BaseStationButton value in the Config for performing a short press on a specific button.</div></div>",2711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2711\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton buttonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationButton value in the Config for performing a short press on a specific button, if set.</div></div>",2712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2712\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> buttonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BaseStationButton value in the Config for performing a long press on a specific button.</div></div>",2713:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2713\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> analogPairingEnable() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Pairing Enabled value in the Config, if set.</div></div>",2714:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2714\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogPairingEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Pairing Enabled value in the Config.&nbsp; This controls whether all of the other analog pairing settings have any affect.</div></div>",2715:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2715\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> analogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Timeout Time value (in seconds) in the Config, if set.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",2716:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2716\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogTimeoutTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Timeout Time value (in seconds) in the Config.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",2717:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2717\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> analogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Timeout Voltage in the Config, if set.</div></div>",2718:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2718\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogTimeoutVoltage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">voltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Timeout Voltage in the Config.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",2719:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2719\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> analogExceedanceEnable()</div><div class=\"TTSummary\">Gets the Analog Exceedance Enabled value in the Config, if set.</div></div>",2720:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2720\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogExceedanceEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Exceedance Enabled value in the Config.</div></div>",2721:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2721\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair analogPairing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationAnalogPair value in the Config for the specified port number, if set.</div></div>",2722:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets the BaseStationAnalogPair value in the Config for the specified port number.</div></div>"});