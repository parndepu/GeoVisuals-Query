#include <napi.h>

Napi::String test(const Napi::CallbackInfo &info) 
{
    Napi::Env env = info.Env();
    return Napi::String::New(env, "test");
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    // Set function name and its method
    exports.Set(    Napi::String::New(env, "tricky"),
                    Napi::Function::New(env, test));
    return exports;
}

NODE_API_MODULE(hello, Init);