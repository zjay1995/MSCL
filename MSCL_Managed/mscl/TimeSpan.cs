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

public class TimeSpan : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal TimeSpan(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(TimeSpan obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~TimeSpan() {
    Dispose();
  }

  public virtual void Dispose() {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_TimeSpan(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      global::System.GC.SuppressFinalize(this);
    }
  }

  public ulong getNanoseconds() {
    ulong ret = msclPINVOKE.TimeSpan_getNanoseconds(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public ulong getMicroseconds() {
    ulong ret = msclPINVOKE.TimeSpan_getMicroseconds(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public ulong getMilliseconds() {
    ulong ret = msclPINVOKE.TimeSpan_getMilliseconds(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public ulong getSeconds() {
    ulong ret = msclPINVOKE.TimeSpan_getSeconds(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static TimeSpan NanoSeconds(ulong nanoseconds) {
    TimeSpan ret = new TimeSpan(msclPINVOKE.TimeSpan_NanoSeconds(nanoseconds), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static TimeSpan MicroSeconds(ulong microseconds) {
    TimeSpan ret = new TimeSpan(msclPINVOKE.TimeSpan_MicroSeconds(microseconds), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static TimeSpan MilliSeconds(ulong milliseconds) {
    TimeSpan ret = new TimeSpan(msclPINVOKE.TimeSpan_MilliSeconds(milliseconds), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static TimeSpan Seconds(ulong seconds) {
    TimeSpan ret = new TimeSpan(msclPINVOKE.TimeSpan_Seconds(seconds), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static TimeSpan Minutes(int minutes) {
    TimeSpan ret = new TimeSpan(msclPINVOKE.TimeSpan_Minutes(minutes), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static TimeSpan Hours(int hours) {
    TimeSpan ret = new TimeSpan(msclPINVOKE.TimeSpan_Hours(hours), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static TimeSpan Days(int days) {
    TimeSpan ret = new TimeSpan(msclPINVOKE.TimeSpan_Days(days), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static readonly ulong NANOSECONDS_PER_MICROSECOND = msclPINVOKE.TimeSpan_NANOSECONDS_PER_MICROSECOND_get();
  public static readonly ulong NANOSECONDS_PER_MILLISECOND = msclPINVOKE.TimeSpan_NANOSECONDS_PER_MILLISECOND_get();
  public static readonly ulong NANOSECONDS_PER_SECOND = msclPINVOKE.TimeSpan_NANOSECONDS_PER_SECOND_get();
}

}
