import P5Wrapper from 'react-p5-wrapper';
import MusicSketch from '../../sketches/MusicSketch'
import sketch from '../../sketches/sketch'
const P5  = () =>{
    return (
        <div className="row">
            <div className="col-12">
                <P5Wrapper sketch={sketch} /*color={this.state.color}*/></P5Wrapper>
            </div>
            <div className="col-12">
                <P5Wrapper sketch={MusicSketch} /*color={this.state.color}*/></P5Wrapper>
            </div>
        </div>
      );
}

export default P5;