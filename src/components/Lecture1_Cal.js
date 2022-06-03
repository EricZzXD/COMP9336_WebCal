import React, {Component, useRef} from 'react';

class Lecture1_Cal extends Component{

    state={
        // Convert Wavelength To Frequency
        Result_Frequency:"",
        Wavelength:"",
        WavelengthUnit:"m",

        // Convert Frequency to Wavelength
        Result_Wavelength:"",
        Frequency:"",
        FrequencyUnit:"Hz",

        // Channel Capacity Calculation
        CH_Bandwidth:"0",
        CH_QAM:"0",
        CH_FrequencyUnit:"Hz",
        Result_DataRate:"",

        // Shannon's Theorem (Noisy Channel)
        NC_Bandwidth:"",
        NC_SN:"",
        NC_FrequencyUnit: "Hz",
        Result_NC_Traffic:"",

        // decibel
        db_p1_Value:'',
        db_p2_Value:'',
        db_Result:"",

        WattTodB:"",
        Result_WattTodBm:"",
        db_wattUnit:"Watt",

        dBmToWatt:"",
        Result_dbToWatt:"",
        db_dbUnit:"dBm",

        // Doppler Shift
        ds_velocity:"",
        ds_WaveOrFreqUnit:"meter",
        ds_VelocityUnit: "m/s",
        ds_Result: "",
        ds_waveOrfreq:""

    }

    render() {
        return (
            <div>
                <h1>Wavelength & Frequency Convert</h1>
                <div className="Wavelength&FrequencyCal">
                    <h2>Calculate Frequency</h2>
                    <div>
                        Wavelength: <input id="Wavelength" onChange={this.handleChange.bind(this)} onBlur={this.FrequencyCalculate.bind(this)}/>
                            <select id="WavelengthUnit" onChange={this.handleChange.bind(this)} value={this.state.WavelengthUnit}>
                                <option value="m">m (Meter)</option>
                                <option value="mm">mm (Millimetre)</option>
                                <option value="um">um (Micrometre)</option>
                                <option value="nm">nm (Nanometer)</option>
                            </select>
                        <br/>
                        <div>
                            <br/>
                            Result:
                            Frequency:
                            <ol>
                                <li><b>{this.state.Result_Frequency / 1000 }</b> Hz</li>
                                <li><b>{this.state.Result_Frequency / 1000000000}</b> MHz</li>
                                <li><b>{this.state.Result_Frequency / 1000000000000}</b> GHz</li>
                            </ol>
                        </div>
                    </div>

                    <h2>Calculate Wavelength</h2>
                    <div>
                        Frequency: <input id="Frequency" onChange={this.handleChange.bind(this)} onBlur={this.WavelengthCalculate.bind(this)}/>
                            <select id="FrequencyUnit" onChange={this.handleChange.bind(this)} value={this.state.FrequencyUnit}>
                                <option value="Hz">Hz</option>
                                <option value="KHz">KHz</option>
                                <option value="MHz">MHz</option>
                                <option value="GHz">GHz</option>
                            </select>
                        <br/>
                        <div>
                            <br/>
                            Result:
                            Wavelength:
                            <ol>
                                <li><b>{this.state.Result_Wavelength * 1000000000}</b> (nm) Nanometer</li>
                                <li><b>{this.state.Result_Wavelength * 1000000}</b> (um) Micrometre</li>
                                <li><b>{this.state.Result_Wavelength * 1000 }</b> (mm) Millimetre</li>
                                <li><b>{this.state.Result_Wavelength}</b> (m) meter</li>
                            </ol>
                        </div>
                        <br/>
                    </div>
                </div>

                <h1>Channel Capacity Calculation</h1>
                <div>
                    Bandwidth: <input id="CH_Bandwidth" onChange={this.handleChange.bind(this)}/>
                            <select id="CH_FrequencyUnit" onChange={this.handleChange.bind(this)} value={this.state.CH_FrequencyUnit}>
                                <option value="Hz">Hz</option>
                                <option value="KHz">KHz</option>
                                <option value="MHz">MHz</option>
                                <option value="GHz">GHz</option>
                            </select>
                    <br/>
                    QAM (M): <input id="CH_QAM" onChange={this.handleChange.bind(this)}/>
                    <br/><button onClick={this.ChannelCapacityCal.bind(this)}>Apply</button>
                    <div>
                        <br/>
                        Result:
                        Data Rate:
                        <ol>
                            <li><b>{this.state.Result_DataRate}</b> bps</li>
                            <li><b>{this.state.Result_DataRate / 1000}</b> Kbps</li>
                            <li><b>{this.state.Result_DataRate / 1000000}</b> Mbps</li>
                            <li><b>{this.state.Result_DataRate / 1000000000}</b> Gbps</li>
                        </ol>
                    </div>
                </div>

                <h1>Shannon's Theorem (Noisy Channel)</h1>
                <p>	Maximum Number of Bits/sec = B Log2(1 + S/N) [Error Free Communication]</p>
                <div>
                    Bandwidth: <input id="NC_Bandwidth" onChange={this.handleChange.bind(this)}/>
                            <select id="NC_FrequencyUnit" onChange={this.handleChange.bind(this)} value={this.state.NC_FrequencyUnit}>
                                <option value="Hz">Hz</option>
                                <option value="KHz">KHz</option>
                                <option value="MHz">MHz</option>
                                <option value="GHz">GHz</option>
                            </select><br/>
                    S/N <input id="NC_SN" onChange={this.handleChange.bind(this)}/> dB
                    <br/><button onClick={this.NC_Max_traffic_Cal.bind(this)}>Apply</button>
                    Result:
                            <ol>
                                <li><b>{this.state.Result_NC_Traffic}</b> bps</li>
                                <li><b>{this.state.Result_NC_Traffic / 1000000}</b> Mbps</li>
                                <li><b>{this.state.Result_NC_Traffic / 1000000000}</b> Gbps</li>
                            </ol>

                </div>

                <h1>Decibel</h1>
                <div>
                    <h2>Calculate dB</h2>
                    <p>Can be used for "Path Loss", "SNR", "Signal Power"</p>
                    <p>dB = 10log10(P1/P2)</p>

                    p1: <input id="db_p1_Value" onChange={this.handleChange.bind(this)}/><br/>
                    p2: <input id="db_p2_Value" onChange={this.handleChange.bind(this)}/>
                    <br/><button onClick={this.db_Calculate_dB.bind(this)}>Apply</button><br/>
                    Result:
                        <ol>
                            <li><b>{this.state.db_Result}</b> dB</li>
                        </ol>


                    <h2>Watt to dBm & dBw</h2>
                    <div>
                        Watt(s) value: <input id="WattTodB" onChange={this.handleChange.bind(this)} onBlur={this.db_WattTodB.bind(this)}/>
                                <select id="db_wattUnit" onChange={this.handleChange.bind(this)} value={this.state.db_wattUnit}>
                                    <option value="Watt">Watts</option>
                                    <option value="MWatt">MillWatt</option>
                                </select>
                        <br/>
                            Result:
                            <ol>
                                <li><b>{this.state.Result_WattTodBm}</b> dBW</li>
                                <li><b>{this.state.Result_WattTodBm + 30}</b> dBm</li>
                            </ol>
                    </div>

                    <h2>dBm & dBw to Watt</h2>
                    <div>
                        dBm(s) value: <input id="dBmToWatt" onChange={this.handleChange.bind(this)} onBlur={this.db_dbToWatt.bind(this)}/>
                                <select id="db_dbUnit" onChange={this.handleChange.bind(this)} value={this.state.db_dbUnit}>
                                    <option value="dBm">dBm</option>
                                    <option value="dBw">dBw</option>
                                </select>
                        <br/>
                            Result:
                            <ol>
                                <li><b>{this.state.Result_dbToWatt}</b> Watt</li>
                                <li><b>{this.state.Result_dbToWatt * 1000}</b> milWatt</li>
                            </ol>
                    </div>

                    <h2>Doppler Shift & Spread & Coherence Time</h2>
                    <p>Frequency Difference = Velocity / Wavelength = ν/λ = νf/c</p>
                    <div>
                        Wavelength:<input id="ds_waveOrfreq" onChange={this.handleChange.bind(this)}/>
                            <select id="ds_WaveOrFreqUnit" onChange={this.handleChange.bind(this)} value={this.state.ds_WaveOrFreqUnit}>
                                    <option value="meter">meter (Wavelength)</option>
                                    <option value="km">Kilometer (Wavelength)</option>
                            </select>
                        <br/>
                        Velocity: <input id="ds_velocity" onChange={this.handleChange.bind(this)}/>
                                <select id="ds_VelocityUnit" onChange={this.handleChange.bind(this)} value={this.state.ds_VelocityUnit}>
                                    <option value="m/s">m/s</option>
                                    <option value="km/h">km/h</option>
                                </select>
                        <br/><button onClick={this.DopplerShift_Cal.bind(this)}>Apply</button><br/>
                        <br/>
                        Result:
                        <ol>
                            <li><b>Doppler Shift: {this.state.ds_Result}</b> Hz</li>
                            <li><b>Doppler Spread: {this.state.ds_Result * 2}</b> Hz</li>
                            <li><b>Coherence Time: {1/(this.state.ds_Result * 2)}</b> s</li>
                            <li><b>Coherence Time: {1/(this.state.ds_Result * 2) * 1000}</b> ms</li>
                        </ol>
                    </div>

                </div>


            </div>
        );
    }
    FrequencyCalculate(e){
        var tempWavelength = 0

        if (this.state.wavelengthUnit === "m"){
            tempWavelength = e.target.value * 1000000
        }else if (this.state.wavelengthUnit === "mm"){
            tempWavelength = e.target.value * 1000
        }else if (this.state.wavelengthUnit === "um"){
            tempWavelength = e.target.value * 1
        }else{
            tempWavelength = e.target.value * 0.001
        }

        var outputValue= 299792458/tempWavelength

        console.log()
        this.setState({Result_Frequency: outputValue})
    }

    WavelengthCalculate(e){
        var tempFrequency = 0

        if (this.state.FrequencyUnit === "Hz"){
            tempFrequency = e.target.value * 1
        }else if (this.state.FrequencyUnit === "KHz"){
            tempFrequency = e.target.value * 1000
        }else if (this.state.FrequencyUnit === "MHz"){
            tempFrequency = e.target.value * 1000000
        }else{
            tempFrequency = e.target.value * 1000000000
        }

        var outputValue= 299792458/tempFrequency

        console.log(outputValue)
        this.setState({Result_Wavelength: outputValue})
    }

    ChannelCapacityCal(e){
        var tempBandwidth = 0
        if (this.state.CH_FrequencyUnit === "Hz"){
            tempBandwidth = this.state.CH_Bandwidth
        }else if (this.state.CH_FrequencyUnit === "KHz"){
            tempBandwidth = this.state.CH_Bandwidth * 1000
        }else if (this.state.CH_FrequencyUnit === "MHz"){
            tempBandwidth = this.state.CH_Bandwidth * 1000000
        }else{
            tempBandwidth = this.state.CH_Bandwidth * 1000000000
        }

        var DataRate = 2 * tempBandwidth * Math.log2(this.state.CH_QAM)
        this.setState({Result_DataRate: DataRate})
    }

    db_WattTodB(e){
        var tempWattValue = 0
        if (this.state.db_wattUnit === "MWatt"){
            tempWattValue = this.state.WattTodB / 1000
        }else{
            tempWattValue = this.state.WattTodB
        }
        var tempResult = 10 * Math.log10(tempWattValue)
        this.setState({Result_WattTodBm: tempResult})
    }

    db_dbToWatt(e){
        var tempdBmValue = 0

        if (this.state.db_dbUnit === "dBw"){
            tempdBmValue = Number(this.state.dBmToWatt) + 30
        }else{
            tempdBmValue = Number(this.state.dBmToWatt)
        }

        var Result_Value = Math.pow(10, (tempdBmValue/10))/1000
        this.setState({Result_dbToWatt: Result_Value})
    }

    DopplerShift_Cal(e){

        var tempVelo = 0
        var wavelengthOrFreq = 0

        if (this.state.ds_WaveOrFreqUnit === "km"){
            wavelengthOrFreq = this.state.ds_waveOrfreq * 1000
        }else if (this.state.ds_WaveOrFreqUnit === "meter"){
            wavelengthOrFreq = this.state.ds_waveOrfreq
        }

        if (this.state.ds_VelocityUnit === "km/h"){
            tempVelo = this.state.ds_velocity /3.6
        }else{
            tempVelo = this.state.ds_velocity
        }
        var result = tempVelo/wavelengthOrFreq
        this.setState({ds_Result:result})
    }

    NC_Max_traffic_Cal(e){

        var updated_SN = Math.pow(10, this.state.NC_SN/10)

        var temp_Bandwidth = 0

        if (this.state.NC_FrequencyUnit === "KHz"){
            temp_Bandwidth = Number(this.state.NC_Bandwidth) * 1000
        }else if (this.state.NC_FrequencyUnit === "MHz"){
            temp_Bandwidth = Number(this.state.NC_Bandwidth) * 1000000
        }else if (this.state.NC_FrequencyUnit === "GHz"){
            temp_Bandwidth = Number(this.state.NC_Bandwidth) * 1000000000
        }else{
            temp_Bandwidth = Number(this.state.NC_Bandwidth)
        }


        var NC_Result = Number(temp_Bandwidth) * Math.log2(1 + Number(updated_SN))
        this.setState({Result_NC_Traffic:NC_Result})
    }

    db_Calculate_dB(e){
        var temp_db_result = 10 * Math.log10(this.state.db_p1_Value/this.state.db_p2_Value)
        this.setState({db_Result: temp_db_result})
    }

    handleChange(e){
        console.log([e.target.id])
        console.log(e.target.value)

        this.setState({[e.target.id]:e.target.value}, ()=>{
            console.log(this.state)
        })
    }
}
export default Lecture1_Cal