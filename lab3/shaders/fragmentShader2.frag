varying vec3 vUv;
uniform vec3 colorC;
uniform vec3 colorD;

void main() {
  gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);

}

