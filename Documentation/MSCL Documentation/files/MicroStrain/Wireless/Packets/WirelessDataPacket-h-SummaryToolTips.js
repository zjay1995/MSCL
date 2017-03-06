NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/WirelessDataPacket.h",{3229:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3229\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessDataPacket</div></div></div><div class=\"TTSummary\">A class representing a Wireless Data Packet.</div></div>",3231:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3231\" class=\"NDPrototype NoParameterForm\">WirelessDataPacket()</div><div class=\"TTSummary\">The default constructor for a Wireless Data Packet</div></div>",3232:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Represents meta data about Math Data Packets.</div></div>",3234:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3234\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DerivedChannelType algorithmId</div><div class=\"TTSummary\">The WirelessTypes::DerivedChannelType.</div></div>",3235:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3235\" class=\"NDPrototype NoParameterForm\">ChannelMask channelMask</div><div class=\"TTSummary\">The ChannelMask to which the algorithm is applied.</div></div>",3236:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3236\" class=\"NDPrototype NoParameterForm\">std::vector&lt;DataSweep&gt; m_dataSweeps</div><div class=\"TTSummary\">Contains one or more data sweeps</div></div>",3237:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3237\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_sweepPos</div><div class=\"TTSummary\">The current position into m_dataSweeps to get the next sweep at</div></div>",3238:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3238\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataType m_dataType</div><div class=\"TTSummary\">The type of data that is present in the packet</div></div>",3239:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3239\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_sweepSize</div><div class=\"TTSummary\">The size of a single sweep within this packet</div></div>",3240:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3240\" class=\"NDPrototype NoParameterForm\">std::size_t m_numSweeps</div><div class=\"TTSummary\">The number of sweeps within this packet</div></div>",3241:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3241\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_payloadOffsetChannelData</div><div class=\"TTSummary\">The offset into the payload of the data packet where channel data starts.</div></div>",3243:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3243\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">DataSweep&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sweep</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a single DataSweep to the data packet</div></div>",3244:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3244\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">container,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">channelDataIndex,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sweepIndex,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td></td><td class=\"PName last\">channelId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds a WirelessDataPoint from a payload to the given &lt;ChannelData&gt; container.</div></div>",3245:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3245\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessChannel::ChannelId wirelessChannelFromChNum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">channelNum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a channel number to a WirelessChannel</div></div>",3246:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3246\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getPayloadData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td></td><td class=\"PName last\">payloadPosition,</td></tr><tr><td class=\"PType first\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a value out of the packet\'s payload based on the given position and the data\'s &lt;DataType&gt;.</div></div>",3247:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3247\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> timestampWithinRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">timestamp</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if a timestamp is within the valid range that MSCL accepts.</div></div>",3248:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3248\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> angleWithinRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if an angle from a Wireless Packet is within the valid range that MSCL accepts.</div></div>",3249:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3249\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> WirelessChannel::ChannelId getMathChannelId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannelType&nbsp;</td><td class=\"PName last\">algorithmId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a math algorithm ID and a channel number (1 = ch1, 8 = ch8) and determines the WirelessChannel::ChannelId.</div></div>",3250:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3250\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getNextSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataSweep&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sweepResult</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next DataSweep in the packet</div></div>",3251:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3251\" class=\"NDPrototype NoParameterForm\">std::size_t numSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of DataSweeps that are in this data packet</div></div>",3252:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3252\" class=\"NDPrototype NoParameterForm\">std::size_t numSweepsRemaining() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of remaining DataSweeps that have not been obtained by the user</div></div>",3253:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3253\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> moreSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether or not there are more DataSweeps in the data packet</div></div>"});