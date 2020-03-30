@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        
        <div class="col-md-6">
            <h1>BPM INFO</h1>
          <div class="well well-lg">
            <h3>Last Read | <span id="bpm-date"></span></h3>
            <h3>Current Status | <span id="bpm"></span></h3>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
            <p>Current BPM</p>
          <div class="progress blue">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
            <div class="progress-value" id="bpm-val"></div>
           
          </div>
         
        </div>
      </div>
      <div class="row">
       <div class="col-md-6">
        <h1>SNORE INFO</h1>
        <div class="well well-lg">
          <h3>Last Read | <span id="snore-date"></span></h3>
          <h3>Current Status | <span id="snore"></span></h3>
        </div>
       </div>
      
      </div>
      <div class="row">
       <div class="col-md-6">
        <h1>BPM HISTORY</h1>
        <div class="well well-lg" id="bpm-history"></div>
       </div>
       <div class="col-md-6">
       
            <canvas id="myChart" width="100" height="100"></canvas>
        
       </div>
      </div>
      <div class="row">
       <div class="col-md-12">
        <h1>SNORE HISTORY</h1>
        <div class="well well-lg" id="snore-history"></div>
       </div>
      </div>
</div>
@endsection
