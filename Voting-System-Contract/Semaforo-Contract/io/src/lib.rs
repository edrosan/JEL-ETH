
#![no_std]
use gstd::{ prelude::*, ActorId };
use gmeta::{InOut,Out,Metadata};


#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum ActionTrafficLight {
     FirstOption,
     SecondOption,
     Thirdoption
}

#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum EventTrafficLight {
     FirstOption,
     SecondOption,
     Thirdoption
}

pub struct ContractMetadata;


impl Metadata for ContractMetadata{
     type Init = ();
     type Handle = InOut<ActionTrafficLight,EventTrafficLight>;
     type Others = ();
     type Reply=();
     type Signal = ();
     type State = Out<Vec<(ActorId, String)>>;

}