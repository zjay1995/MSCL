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

public class EventTriggerOptions : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal EventTriggerOptions(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(EventTriggerOptions obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~EventTriggerOptions() {
    Dispose();
  }

  public virtual void Dispose() {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_EventTriggerOptions(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      global::System.GC.SuppressFinalize(this);
    }
  }

  public EventTriggerOptions() : this(msclPINVOKE.new_EventTriggerOptions(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public BitMask triggerMask() {
    BitMask ret = new BitMask(msclPINVOKE.EventTriggerOptions_triggerMask__SWIG_0(swigCPtr), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void triggerMask(BitMask mask) {
    msclPINVOKE.EventTriggerOptions_triggerMask__SWIG_1(swigCPtr, BitMask.getCPtr(mask));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public bool anyTriggersEnabled() {
    bool ret = msclPINVOKE.EventTriggerOptions_anyTriggersEnabled(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool triggerEnabled(byte triggerIndex) {
    bool ret = msclPINVOKE.EventTriggerOptions_triggerEnabled(swigCPtr, triggerIndex);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void enableTrigger(byte triggerIndex, bool enable) {
    msclPINVOKE.EventTriggerOptions_enableTrigger__SWIG_0(swigCPtr, triggerIndex, enable);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public void enableTrigger(byte triggerIndex) {
    msclPINVOKE.EventTriggerOptions_enableTrigger__SWIG_1(swigCPtr, triggerIndex);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public uint preDuration() {
    uint ret = msclPINVOKE.EventTriggerOptions_preDuration__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void preDuration(uint duration) {
    msclPINVOKE.EventTriggerOptions_preDuration__SWIG_1(swigCPtr, duration);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public uint postDuration() {
    uint ret = msclPINVOKE.EventTriggerOptions_postDuration__SWIG_0(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void postDuration(uint duration) {
    msclPINVOKE.EventTriggerOptions_postDuration__SWIG_1(swigCPtr, duration);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public void trigger(byte triggerIndex, Trigger trigger) {
    msclPINVOKE.EventTriggerOptions_trigger__SWIG_0(swigCPtr, triggerIndex, Trigger.getCPtr(trigger));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public Trigger trigger(byte triggerIndex) {
    Trigger ret = new Trigger(msclPINVOKE.EventTriggerOptions_trigger__SWIG_1(swigCPtr, triggerIndex), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public Triggers triggers() {
    Triggers ret = new Triggers(msclPINVOKE.EventTriggerOptions_triggers(swigCPtr), false);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

}

}
