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

public class HeadingData : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal HeadingData(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(HeadingData obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~HeadingData() {
    Dispose();
  }

  public virtual void Dispose() {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_HeadingData(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      global::System.GC.SuppressFinalize(this);
    }
  }

  public HeadingData() : this(msclPINVOKE.new_HeadingData(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public HeadingData.HeadingType heading {
    set {
      msclPINVOKE.HeadingData_heading_set(swigCPtr, (int)value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      HeadingData.HeadingType ret = (HeadingData.HeadingType)msclPINVOKE.HeadingData_heading_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public float headingAngle {
    set {
      msclPINVOKE.HeadingData_headingAngle_set(swigCPtr, value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      float ret = msclPINVOKE.HeadingData_headingAngle_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public float headingAngleUncertainty {
    set {
      msclPINVOKE.HeadingData_headingAngleUncertainty_set(swigCPtr, value);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    } 
    get {
      float ret = msclPINVOKE.HeadingData_headingAngleUncertainty_get(swigCPtr);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public enum HeadingType {
    TRUE_HEADING = 0x01,
    MAGNETIC_HEADING = 0x02
  }

}

}
