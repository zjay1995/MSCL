//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 3.0.12
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class BaseStationConfig : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal BaseStationConfig(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(BaseStationConfig obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~BaseStationConfig() {
    Dispose();
  }

  public virtual void Dispose() {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_BaseStationConfig(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      global::System.GC.SuppressFinalize(this);
    }
  }

  public BaseStationConfig() : this(msclPINVOKE.new_BaseStationConfig(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public WirelessTypes.TransmitPower transmitPower() {
    WirelessTypes.TransmitPower ret = (WirelessTypes.TransmitPower)msclPINVOKE.BaseStationConfig_transmitPower__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void transmitPower(WirelessTypes.TransmitPower power) {
    msclPINVOKE.BaseStationConfig_transmitPower__SWIG_1(swigCPtr, (int)power);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public WirelessTypes.CommProtocol communicationProtocol() {
    WirelessTypes.CommProtocol ret = (WirelessTypes.CommProtocol)msclPINVOKE.BaseStationConfig_communicationProtocol__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void communicationProtocol(WirelessTypes.CommProtocol commProtocol) {
    msclPINVOKE.BaseStationConfig_communicationProtocol__SWIG_1(swigCPtr, (int)commProtocol);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public BaseStationButton buttonLongPress(byte buttonNumber) {
    BaseStationButton ret = new BaseStationButton(msclPINVOKE.BaseStationConfig_buttonLongPress__SWIG_0(swigCPtr, buttonNumber), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void buttonLongPress(byte buttonNumber, BaseStationButton button) {
    msclPINVOKE.BaseStationConfig_buttonLongPress__SWIG_1(swigCPtr, buttonNumber, BaseStationButton.getCPtr(button));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public BaseStationButton buttonShortPress(byte buttonNumber) {
    BaseStationButton ret = new BaseStationButton(msclPINVOKE.BaseStationConfig_buttonShortPress__SWIG_0(swigCPtr, buttonNumber), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void buttonShortPress(byte buttonNumber, BaseStationButton button) {
    msclPINVOKE.BaseStationConfig_buttonShortPress__SWIG_1(swigCPtr, buttonNumber, BaseStationButton.getCPtr(button));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public bool analogPairingEnable() {
    bool ret = msclPINVOKE.BaseStationConfig_analogPairingEnable__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void analogPairingEnable(bool enable) {
    msclPINVOKE.BaseStationConfig_analogPairingEnable__SWIG_1(swigCPtr, enable);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public ushort analogTimeoutTime() {
    ushort ret = msclPINVOKE.BaseStationConfig_analogTimeoutTime__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void analogTimeoutTime(ushort seconds) {
    msclPINVOKE.BaseStationConfig_analogTimeoutTime__SWIG_1(swigCPtr, seconds);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public float analogTimeoutVoltage() {
    float ret = msclPINVOKE.BaseStationConfig_analogTimeoutVoltage__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void analogTimeoutVoltage(float voltage) {
    msclPINVOKE.BaseStationConfig_analogTimeoutVoltage__SWIG_1(swigCPtr, voltage);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public bool analogExceedanceEnable() {
    bool ret = msclPINVOKE.BaseStationConfig_analogExceedanceEnable__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void analogExceedanceEnable(bool enable) {
    msclPINVOKE.BaseStationConfig_analogExceedanceEnable__SWIG_1(swigCPtr, enable);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public BaseStationAnalogPair analogPairing(byte portNumber) {
    BaseStationAnalogPair ret = new BaseStationAnalogPair(msclPINVOKE.BaseStationConfig_analogPairing__SWIG_0(swigCPtr, portNumber), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void analogPairing(byte portNumber, BaseStationAnalogPair pair) {
    msclPINVOKE.BaseStationConfig_analogPairing__SWIG_1(swigCPtr, portNumber, BaseStationAnalogPair.getCPtr(pair));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

}

}
