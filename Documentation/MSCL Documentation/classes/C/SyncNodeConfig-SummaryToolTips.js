NDSummary.OnToolTipsLoaded("CClass:SyncNodeConfig",{2320:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2320\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncNodeConfig</div></div></div><div class=\"TTSummary\">A helper class for reading and writing values used for Synchronized Sampling configuration</div></div>",2322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SyncNetworkInfo&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">networkInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncNodeConfig object</div></div>",2324:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2324\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SyncNetworkInfo* m_networkInfo</div><div class=\"TTSummary\">The SyncNetworkInfo object containing information on the Node in the Sync Sampling network.</div></div>",2325:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2325\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper to use in reading and writing eeproms.</div></div>",2327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2327\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate()</div><div class=\"TTSummary\">Gets the SampleRate of the node.</div></div>",2328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2328\" class=\"NDPrototype NoParameterForm\">ChannelMask activeChannels()</div><div class=\"TTSummary\">Gets the ChannelMask of the node.</div></div>",2329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2329\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> activeChannelCount()</div><div class=\"TTSummary\">Gets the number of active channels on the node for use in Sync Sampling formulas.&nbsp; Note: this does not necessarily return the true active channel count, as some channels on some nodes don\'t count towards active channels in Sync Sampling formulas.</div></div>",2330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2330\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat dataFormat()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat of the node.</div></div>",2331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2331\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod collectionMethod()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod of the node.</div></div>",2332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2332\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sweepsPerSession()</div><div class=\"TTSummary\">Gets the number of sweeps per session of the node.</div></div>",2333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2333\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode samplingMode()</div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode ofthe node.</div></div>",2334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2334\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sensorDelay()</div><div class=\"TTSummary\">Gets the value stored in eeprom for the sensor delay of the node.</div></div>",2335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2335\" class=\"NDPrototype NoParameterForm\">TimeSpan timeBetweenBursts()</div><div class=\"TTSummary\">Gets the time between bursts of the node.</div></div>",2336:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2336\" class=\"NDPrototype NoParameterForm\">WirelessTypes::NodeRetransmission retransmission()</div><div class=\"TTSummary\">Gets the WirelessTypes::NodeRetransmission of the node.</div></div>",2337:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2337\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SettlingTime filter2()</div><div class=\"TTSummary\">Gets the second filter of the node.</div></div>",2338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2338\" class=\"NDPrototype NoParameterForm\">DataModeMask dataMode()</div><div class=\"TTSummary\">Gets the DataModeMask of the node.</div></div>",2339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2339\" class=\"NDPrototype NoParameterForm\">SampleRate derivedDataRate()</div><div class=\"TTSummary\">Gets the derived data rate as a SampleRate object.</div></div>",2340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2340\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ChannelMask derivedChannelMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannelType&nbsp;</td><td class=\"PName last\">derivedChannel</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the channel mask for the specified WirelessTypes::DerivedChannelType as a ChannelMask.</div></div>",2341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2341\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> txPerGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the transmissions per group to the node.</div></div>",2342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2342\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> groupSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the group size to the node.</div></div>",2343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2343\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tdmaAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the TDMA address to the node.</div></div>",2344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2344\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> retransmission(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">NodeRetransmission&nbsp;</td><td class=\"PName last\">reTx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the retransmission value to the node.</div></div>",2345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2345\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> maxRetransPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxReTxPerBurst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the maximum retransmissions per burst to the node.</div></div>",2346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2346\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyEepromChanges()</div><div class=\"TTSummary\">Resets the radio/power on the Node to apply eeprom changes that have been made.</div></div>"});