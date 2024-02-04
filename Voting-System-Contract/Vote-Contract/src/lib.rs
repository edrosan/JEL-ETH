#![no_std]
use gstd::{errors::Result, collections::HashMap, msg , prelude::*,ActorId};
use io::*;

#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));



static mut STATE:Option<HashMap<ActorId, String>> = None;



fn state_mut() -> &'static mut HashMap<ActorId,String> {

    let state = unsafe { STATE.as_mut()};

    unsafe { state.unwrap_unchecked() }


}


#[no_mangle]
extern "C" fn init () {

   unsafe { STATE = Some(HashMap::new())}


}

#[no_mangle]
extern "C" fn handle(){


    handle_state().expect("Execution Error")


}

    

fn handle_state() -> Result<()> {

        let payload = msg::load()?;

        if let ActionTrafficLight::FirstOption = payload {

            let currentstate = state_mut();
            currentstate.insert(msg::source(), "FirstOption".to_string());
            msg::reply(EventTrafficLight::FirstOption,0)?;

        }

        if let ActionTrafficLight::SecondOption = payload {

            let currentstate = state_mut();
            currentstate.insert(msg::source(), "SecondOption".to_string());
            msg::reply(EventTrafficLight::SecondOption,0)?;

        }

        if let ActionTrafficLight::Thirdoption= payload {
            
            let currentstate = state_mut();
            currentstate.insert(msg::source(), "ThirdOption".to_string());
            msg::reply(EventTrafficLight::Thirdoption,0)?;

        }

    Ok(())
    }



    #[no_mangle]
    extern "C" fn state() {

        let state: Vec<_> =state_mut().iter().map(|(k, v)| (*k, v.clone())).collect();
    
        msg::reply(state, 0).expect("failed to encode or reply from `state()`");
    }