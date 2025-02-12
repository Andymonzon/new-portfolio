import { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export const Room = (props) => {
  const { nodes, materials } = useGLTF("/cuartoPortfolio.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="zoro">
          <group name="root001">
            <group name="GLTF_SceneRootNode001">
              <group name="Arete1001_243">
                <mesh
                  name="Object_491"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_491.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Arete1_240">
                <mesh
                  name="Object_485"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_485.geometry}
                  material={materials.Aretes}
                />
              </group>
              <group name="Arete2_241">
                <mesh
                  name="Object_487"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_487.geometry}
                  material={materials.Aretes}
                />
              </group>
              <group name="Arete3_242">
                <mesh
                  name="Object_489"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_489.geometry}
                  material={materials.Aretes}
                />
              </group>
              <group name="Brazo_bot_left_17">
                <group name="Brazo_bot_left_O__16">
                  <mesh
                    name="Object_38"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Brazo_bot_right_19">
                <group name="Brazo_bot_right_O__18">
                  <mesh
                    name="Object_42"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_42.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Brazo_top_left_21">
                <group name="Brazo_top_left_O__20">
                  <mesh
                    name="Object_46"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_46.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Brazo_top_right_15">
                <group name="Brazo_top_right_O__14">
                  <mesh
                    name="Object_34"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Cabeza_O__11">
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Cabeza_10">
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Piel_0}
                />
              </group>
              <group name="Faja_4">
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Polera}
                />
              </group>
              <group name="FajaO__9">
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Outline_faja}
                />
              </group>
              <group name="Hombros_13">
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Hombtros_O_23">
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Mano_left_O__3">
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Mano_left_2">
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Mano_right_1">
                <group name="Mano_right_O__0">
                  <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_4003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4003.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Orejas_O__25">
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Orejas_24">
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Pantalones_O__7">
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Outline_pantalones}
                />
              </group>
              <group name="Pantalones_5">
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Polera}
                />
              </group>
              <group name="Patillas_26">
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.Pelo}
                />
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.Outline_pelo}
                />
              </group>
              <group name="Plane002_28">
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane003_223">
                <mesh
                  name="Object_451"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_451.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane004_224">
                <mesh
                  name="Object_453"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_453.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane005_29">
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane006_30">
                <mesh
                  name="Object_65"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane007_225">
                <mesh
                  name="Object_455"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_455.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane008_226">
                <mesh
                  name="Object_457"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_457.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane009_227">
                <mesh
                  name="Object_459"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_459.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane010_31">
                <mesh
                  name="Object_67"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane011_32">
                <mesh
                  name="Object_69"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane012_33">
                <mesh
                  name="Object_71"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane013_34">
                <mesh
                  name="Object_73"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_73.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane014_228">
                <mesh
                  name="Object_461"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_461.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane015_35">
                <mesh
                  name="Object_75"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane016_229">
                <mesh
                  name="Object_463"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_463.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane017_230">
                <mesh
                  name="Object_465"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_465.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane018_231">
                <mesh
                  name="Object_467"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_467.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane019_232">
                <mesh
                  name="Object_469"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_469.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane020_233">
                <mesh
                  name="Object_471"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_471.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane021_234">
                <mesh
                  name="Object_473"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_473.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane022_235">
                <mesh
                  name="Object_475"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_475.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane023_36">
                <mesh
                  name="Object_77"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane024_37">
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane025_38">
                <mesh
                  name="Object_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane026_39">
                <mesh
                  name="Object_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane027_40">
                <mesh
                  name="Object_85"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane028_41">
                <mesh
                  name="Object_87"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane029_42">
                <mesh
                  name="Object_89"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane030_43">
                <mesh
                  name="Object_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane031_44">
                <mesh
                  name="Object_93"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane032_45">
                <mesh
                  name="Object_95"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane033_46">
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane034_47">
                <mesh
                  name="Object_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane035_48">
                <mesh
                  name="Object_101"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane036_49">
                <mesh
                  name="Object_103"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_103.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane037_50">
                <mesh
                  name="Object_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_105.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane038_51">
                <mesh
                  name="Object_107"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_107.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane039_52">
                <mesh
                  name="Object_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane040_236">
                <mesh
                  name="Object_477"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_477.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane041_53">
                <mesh
                  name="Object_111"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_111.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane042_237">
                <mesh
                  name="Object_479"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_479.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane043_238">
                <mesh
                  name="Object_481"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_481.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane045_239">
                <mesh
                  name="Object_483"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_483.geometry}
                  material={materials.Outline_pelo}
                />
              </group>
              <group name="Plane059_54">
                <mesh
                  name="Object_113"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane060_55">
                <mesh
                  name="Object_115"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_115.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane061_56">
                <mesh
                  name="Object_117"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_117.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane063_57">
                <mesh
                  name="Object_119"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane064_58">
                <mesh
                  name="Object_121"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_121.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane068_59">
                <mesh
                  name="Object_123"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane069_60">
                <mesh
                  name="Object_125"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_125.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane085_61">
                <mesh
                  name="Object_127"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane086_62">
                <mesh
                  name="Object_129"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane091_63">
                <mesh
                  name="Object_131"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane092_64">
                <mesh
                  name="Object_133"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_133.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane093_65">
                <mesh
                  name="Object_135"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_135.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane094_66">
                <mesh
                  name="Object_137"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane095_67">
                <mesh
                  name="Object_139"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_139.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane096_68">
                <mesh
                  name="Object_141"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_141.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane097_69">
                <mesh
                  name="Object_143"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_143.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane098_70">
                <mesh
                  name="Object_145"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_145.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane099_71">
                <mesh
                  name="Object_147"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_147.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane100_72">
                <mesh
                  name="Object_149"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_149.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane101_73">
                <mesh
                  name="Object_151"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_151.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane102_74">
                <mesh
                  name="Object_153"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_153.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane103_75">
                <mesh
                  name="Object_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_155.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane104_76">
                <mesh
                  name="Object_157"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_157.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane105_77">
                <mesh
                  name="Object_159"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_159.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane106_78">
                <mesh
                  name="Object_161"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_161.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane107_79">
                <mesh
                  name="Object_163"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_163.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane108_80">
                <mesh
                  name="Object_165"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_165.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane109_81">
                <mesh
                  name="Object_167"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_167.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane110_82">
                <mesh
                  name="Object_169"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_169.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane115_83">
                <mesh
                  name="Object_171"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_171.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane123_84">
                <mesh
                  name="Object_173"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_173.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane124_85">
                <mesh
                  name="Object_175"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_175.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane125_86">
                <mesh
                  name="Object_177"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_177.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane126_87">
                <mesh
                  name="Object_179"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_179.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane127_88">
                <mesh
                  name="Object_181"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_181.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane128_89">
                <mesh
                  name="Object_183"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_183.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane129_90">
                <mesh
                  name="Object_185"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_185.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane130_91">
                <mesh
                  name="Object_187"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_187.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane131_92">
                <mesh
                  name="Object_189"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_189.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane132_93">
                <mesh
                  name="Object_191"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_191.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane133_94">
                <mesh
                  name="Object_193"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_193.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane134_95">
                <mesh
                  name="Object_195"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_195.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane135_96">
                <mesh
                  name="Object_197"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_197.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane136_97">
                <mesh
                  name="Object_199"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_199.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane137_98">
                <mesh
                  name="Object_201"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_201.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane138_99">
                <mesh
                  name="Object_203"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_203.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane139_100">
                <mesh
                  name="Object_205"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_205.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane140_101">
                <mesh
                  name="Object_207"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_207.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane141_102">
                <mesh
                  name="Object_209"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_209.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane142_103">
                <mesh
                  name="Object_211"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_211.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane143_104">
                <mesh
                  name="Object_213"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_213.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane144_105">
                <mesh
                  name="Object_215"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_215.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane145_106">
                <mesh
                  name="Object_217"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_217.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane146_107">
                <mesh
                  name="Object_219"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_219.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane147_108">
                <mesh
                  name="Object_221"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_221.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane148_109">
                <mesh
                  name="Object_223"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_223.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane149_110">
                <mesh
                  name="Object_225"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_225.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane150_111">
                <mesh
                  name="Object_227"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane151_112">
                <mesh
                  name="Object_229"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_229.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane152_113">
                <mesh
                  name="Object_231"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_231.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane153_114">
                <mesh
                  name="Object_233"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_233.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane154_115">
                <mesh
                  name="Object_235"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_235.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane155_116">
                <mesh
                  name="Object_237"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_237.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane156_117">
                <mesh
                  name="Object_239"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_239.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane157_118">
                <mesh
                  name="Object_241"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_241.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane158_119">
                <mesh
                  name="Object_243"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_243.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane159_120">
                <mesh
                  name="Object_245"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_245.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane160_121">
                <mesh
                  name="Object_247"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_247.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane161_122">
                <mesh
                  name="Object_249"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_249.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane162_123">
                <mesh
                  name="Object_251"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_251.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane163_124">
                <mesh
                  name="Object_253"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_253.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane164_125">
                <mesh
                  name="Object_255"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_255.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane165_126">
                <mesh
                  name="Object_257"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_257.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane166_127">
                <mesh
                  name="Object_259"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_259.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane167_128">
                <mesh
                  name="Object_261"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_261.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane168_129">
                <mesh
                  name="Object_263"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_263.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane169_130">
                <mesh
                  name="Object_265"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_265.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane170_131">
                <mesh
                  name="Object_267"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_267.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane171_132">
                <mesh
                  name="Object_269"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_269.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane172_133">
                <mesh
                  name="Object_271"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_271.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane173_134">
                <mesh
                  name="Object_273"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_273.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane174_135">
                <mesh
                  name="Object_275"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_275.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane175_136">
                <mesh
                  name="Object_277"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_277.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane176_137">
                <mesh
                  name="Object_279"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_279.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane177_138">
                <mesh
                  name="Object_281"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_281.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane178_139">
                <mesh
                  name="Object_283"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_283.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane179_140">
                <mesh
                  name="Object_285"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_285.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane180_141">
                <mesh
                  name="Object_287"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_287.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane181_142">
                <mesh
                  name="Object_289"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_289.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane182_143">
                <mesh
                  name="Object_291"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_291.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane183_144">
                <mesh
                  name="Object_293"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_293.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane184_145">
                <mesh
                  name="Object_295"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_295.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane185_146">
                <mesh
                  name="Object_297"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_297.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane186_147">
                <mesh
                  name="Object_299"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_299.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane187_148">
                <mesh
                  name="Object_301"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_301.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane188_149">
                <mesh
                  name="Object_303"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_303.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane189_150">
                <mesh
                  name="Object_305"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_305.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane190_151">
                <mesh
                  name="Object_307"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_307.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane191_152">
                <mesh
                  name="Object_309"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_309.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane192_153">
                <mesh
                  name="Object_311"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_311.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane193_154">
                <mesh
                  name="Object_313"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_313.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane194_155">
                <mesh
                  name="Object_315"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_315.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane195_156">
                <mesh
                  name="Object_317"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_317.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane196_157">
                <mesh
                  name="Object_319"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_319.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane197_158">
                <mesh
                  name="Object_321"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_321.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane198_159">
                <mesh
                  name="Object_323"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_323.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane199_160">
                <mesh
                  name="Object_325"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_325.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane200_161">
                <mesh
                  name="Object_327"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_327.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane201_162">
                <mesh
                  name="Object_329"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_329.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane202_163">
                <mesh
                  name="Object_331"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_331.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane203_164">
                <mesh
                  name="Object_333"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_333.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane204_165">
                <mesh
                  name="Object_335"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_335.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane205_166">
                <mesh
                  name="Object_337"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_337.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane206_167">
                <mesh
                  name="Object_339"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_339.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane207_168">
                <mesh
                  name="Object_341"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_341.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane208_169">
                <mesh
                  name="Object_343"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_343.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane209_170">
                <mesh
                  name="Object_345"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_345.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane210_171">
                <mesh
                  name="Object_347"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_347.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane211_172">
                <mesh
                  name="Object_349"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_349.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane212_173">
                <mesh
                  name="Object_351"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_351.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane213_174">
                <mesh
                  name="Object_353"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_353.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane214_175">
                <mesh
                  name="Object_355"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_355.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane215_176">
                <mesh
                  name="Object_357"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_357.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane216_177">
                <mesh
                  name="Object_359"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_359.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane217_178">
                <mesh
                  name="Object_361"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_361.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane218_179">
                <mesh
                  name="Object_363"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_363.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane219_180">
                <mesh
                  name="Object_365"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_365.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane220_181">
                <mesh
                  name="Object_367"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_367.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane221_182">
                <mesh
                  name="Object_369"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_369.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane222_183">
                <mesh
                  name="Object_371"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_371.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane223_184">
                <mesh
                  name="Object_373"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_373.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane224_185">
                <mesh
                  name="Object_375"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_375.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane225_186">
                <mesh
                  name="Object_377"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_377.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane226_187">
                <mesh
                  name="Object_379"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_379.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane227_188">
                <mesh
                  name="Object_381"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_381.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane228_189">
                <mesh
                  name="Object_383"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_383.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane229_190">
                <mesh
                  name="Object_385"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_385.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane230_191">
                <mesh
                  name="Object_387"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_387.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane231_192">
                <mesh
                  name="Object_389"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_389.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane232_193">
                <mesh
                  name="Object_391"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_391.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane233_194">
                <mesh
                  name="Object_393"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_393.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane234_195">
                <mesh
                  name="Object_395"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_395.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane235_196">
                <mesh
                  name="Object_397"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_397.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane236_197">
                <mesh
                  name="Object_399"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_399.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane237_198">
                <mesh
                  name="Object_401"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_401.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane238_199">
                <mesh
                  name="Object_403"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_403.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane239_200">
                <mesh
                  name="Object_405"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_405.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane240_201">
                <mesh
                  name="Object_407"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_407.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane241_202">
                <mesh
                  name="Object_409"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_409.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane242_203">
                <mesh
                  name="Object_411"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_411.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane243_204">
                <mesh
                  name="Object_413"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_413.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane244_205">
                <mesh
                  name="Object_415"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_415.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane245_206">
                <mesh
                  name="Object_417"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_417.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane246_207">
                <mesh
                  name="Object_419"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_419.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane247_208">
                <mesh
                  name="Object_421"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_421.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane248_209">
                <mesh
                  name="Object_423"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_423.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane249_210">
                <mesh
                  name="Object_425"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_425.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane250_211">
                <mesh
                  name="Object_427"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_427.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane251_212">
                <mesh
                  name="Object_429"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_429.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane254_213">
                <mesh
                  name="Object_431"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_431.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane255_214">
                <mesh
                  name="Object_433"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_433.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane256_215">
                <mesh
                  name="Object_435"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_435.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane257_216">
                <mesh
                  name="Object_437"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_437.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane258_217">
                <mesh
                  name="Object_439"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_439.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane259_218">
                <mesh
                  name="Object_441"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_441.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane261_219">
                <mesh
                  name="Object_443"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_443.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane264_220">
                <mesh
                  name="Object_445"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_445.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane265_221">
                <mesh
                  name="Object_447"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_447.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane266_222">
                <mesh
                  name="Object_449"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_449.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane_27">
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Polera_O__245">
                <mesh
                  name="Object_495"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_495.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Polera_244">
                <mesh
                  name="Object_493"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_493.geometry}
                  material={materials.Polera}
                />
              </group>
              <group name="Torso_O__22">
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Torso_12">
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Zapatos_O__8">
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Outline_pantalones}
                />
              </group>
              <group name="Zapatos_6">
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Zapatos}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="lampara">
          <group name="root003">
            <group name="GLTF_SceneRootNode003">
              <group name="Circle_2">
                <mesh
                  name="Object_7001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7001.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group name="Cube_3">
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group name="Cylinder_1">
                <mesh
                  name="Object_4005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4005.geometry}
                  material={materials["Material.008"]}
                />
                <mesh
                  name="Object_5001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5001.geometry}
                  material={materials["Material.009"]}
                />
              </group>
              <group name="Sphere_4">
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials["Material.010"]}
                />
                <mesh
                  name="Object_12001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12001.geometry}
                  material={materials["Material.011"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="sombrero">
          <group name="root004">
            <group name="GLTF_SceneRootNode004">
              <group name="hat_luffy_0">
                <mesh
                  name="Object_4006"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4006.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_5002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5002.geometry}
                  material={materials.line}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="luffy">
          <group name="root005">
            <group name="GLTF_SceneRootNode005">
              <group name="_0">
                <mesh
                  name="Object_4007"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4007.geometry}
                  material={materials.default_tex0}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="cat">
          <mesh
            name="choucat_body_0"
            castShadow
            receiveShadow
            geometry={nodes.choucat_body_0.geometry}
            material={materials.body}
          />
          <mesh
            name="choucat_body_0_1"
            castShadow
            receiveShadow
            geometry={nodes.choucat_body_0_1.geometry}
            material={materials["whiskers.002"]}
          />
        </group>
        <group name="parlante">
          <group name="29b256d4dadd4d4f9ba3b983510f3b85objcleanermaterialmergergle">
            <mesh
              name="Object_2002"
              castShadow
              receiveShadow
              geometry={nodes.Object_2002.geometry}
              material={materials.None}
            />
          </group>
        </group>
        <group name="barbablanca">
          <group name="One_Piece_-_WhiteBeardobjcleanermaterialmergergles">
            <mesh
              name="Object_2009"
              castShadow
              receiveShadow
              geometry={nodes.Object_2009.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              name="Object_3001"
              castShadow
              receiveShadow
              geometry={nodes.Object_3001.geometry}
              material={materials["edward001_cloak_d.001"]}
            />
          </group>
        </group>
        <mesh
          name="paredes"
          castShadow
          receiveShadow
          geometry={nodes.paredes.geometry}
          material={nodes.paredes.material}
        />
        <mesh
          name="techo_y_suelo"
          castShadow
          receiveShadow
          geometry={nodes.techo_y_suelo.geometry}
          material={nodes.techo_y_suelo.material}
        />
        <PerspectiveCamera
          name="Camera"
          makeDefault={false}
          far={1000}
          near={0.1}
          fov={32.269}
          position={[21.564, 3.382, -17.074]}
          rotation={[3.093, 0.921, -3.103]}
        />
        <mesh
          name="estanteria"
          castShadow
          receiveShadow
          geometry={nodes.estanteria.geometry}
          material={nodes.estanteria.material}
        />
        <group name="lampara_lava">
          <group name="3af78b939e60426f97f1cd5a40c920a3fbx">
            <group name="RootNode">
              <group name="LAVAMESH">
                <mesh
                  name="LAVAMESH_rampShader1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LAVAMESH_rampShader1_0.geometry}
                  material={materials.rampShader1}
                />
              </group>
              <group name="pCylinder1">
                <mesh
                  name="pCylinder1_chrome1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder1_chrome1_0.geometry}
                  material={materials.chrome1}
                />
                <mesh
                  name="pCylinder1_GLASS_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder1_GLASS_0.geometry}
                  material={materials.GLASS}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="mesa_de_luz"
          castShadow
          receiveShadow
          geometry={nodes.mesa_de_luz.geometry}
          material={nodes.mesa_de_luz.material}
        />
        <group name="silla">
          <group name="Office_Chairfbx">
            <group name="RootNode002">
              <group name="Office_Chair">
                <group name="Object_4">
                  <mesh
                    name="Office_Chair_Office_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Office_Chair_Office_Chair_0.geometry}
                    material={materials.Office_Chair}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="escritorio">
          <group name="root">
            <group name="GLTF_SceneRootNode">
              <group name="Cube_0">
                <group name="Object_4001">
                  <mesh
                    name="Object_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0.geometry}
                    material={materials.Material}
                  />
                  <mesh
                    name="Object_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_1.geometry}
                    material={materials.darkmetal}
                  />
                  <mesh
                    name="Object_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_2.geometry}
                    material={materials.dark}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="monitor">
          <group name="356e21ee1f1e40c6828fcd2e1a3a355bfbx">
            <group name="RootNode001">
              <group name="Curved_Monitor">
                <group name="Curved_Monitor001">
                  <mesh
                    name="Curved_Monitor_MAT_Plastic_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Curved_Monitor_MAT_Plastic_0.geometry}
                    material={materials.MAT_Plastic}
                  />
                  <mesh
                    name="pantalla"
                    castShadow
                    receiveShadow
                    geometry={nodes.pantalla.geometry}
                    material={materials.MAT_Screen}
                    position={[-8.218, 8.182, 13.593]}
                    rotation={[0.12, Math.PI / 2, 0]}
                    scale={[0.105, 2.961, 6.007]}
                  />
                </group>
                <group name="Peana">
                  <mesh
                    name="Peana_MAT_Plastic_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Peana_MAT_Plastic_0.geometry}
                    material={materials.MAT_Plastic}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="keyboard">
          <group name="Logitech_Tastatur10fbx">
            <group name="RootNode003">
              <group name="Camera001">
                <group name="Object_4002" />
              </group>
              <group name="Tastatur">
                <mesh
                  name="Tastatur_Tastatur_F����chen_0"
                  castShadow
                  receiveShadow
                  geometry={nodes["Tastatur_Tastatur_F����chen_0"].geometry}
                  material={materials.Tastatur_Fchen}
                />
                <mesh
                  name="Tastatur_Tastatur_Seite_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tastatur_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                />
                <mesh
                  name="Tastatur_Tastatur_Untergrund_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tastatur_Tastatur_Untergrund_0.geometry}
                  material={materials.Tastatur_Untergrund}
                />
                <mesh
                  name="Tastatur_Tastatur_Unterseite_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tastatur_Tastatur_Unterseite_0.geometry}
                  material={materials.Tastatur_Unterseite}
                />
              </group>
              <group name="Tasten">
                <mesh
                  name="Tasten_Tasten_2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tasten_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                />
              </group>
              <group name="Tasten_Kappen">
                <mesh
                  name="Tasten_Kappen_Tasten_Emission_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tasten_Kappen_Tasten_Emission_0.geometry}
                  material={materials.Tasten_Emission}
                />
                <mesh
                  name="Tasten_Kappen_Tasten_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tasten_Kappen_Tasten_0.geometry}
                  material={materials.Tasten}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="mouse">
          <group name="root002">
            <group name="GLTF_SceneRootNode002">
              <group name="Cylinder_0">
                <mesh
                  name="Object_4004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4004.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  name="Object_6001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6001.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials["Material.004"]}
                />
                <mesh
                  name="Object_8001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8001.geometry}
                  material={materials["Material.005"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="pizarron">
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-23.622, 29.58, -8.129]}
          scale={[2.449, 3.586, 1.461]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[-10.051, 30.523, 14.842]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[2.839, 3.608, 2.558]}
        />
        <mesh
          name="almohada_1"
          castShadow
          receiveShadow
          geometry={nodes.almohada_1.geometry}
          material={nodes.almohada_1.material}
        />
        <mesh
          name="almohada_2"
          castShadow
          receiveShadow
          geometry={nodes.almohada_2.geometry}
          material={nodes.almohada_2.material}
        />
        <mesh
          name="colchon"
          castShadow
          receiveShadow
          geometry={nodes.colchon.geometry}
          material={nodes.colchon.material}
        />
        <mesh
          name="soporte_cama"
          castShadow
          receiveShadow
          geometry={nodes.soporte_cama.geometry}
          material={nodes.soporte_cama.material}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
        />
        <mesh
          name="Object_2001"
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials.Copertina}
        >
          <mesh
            name="Object_3"
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Pagine_Centrali}
          />
          <mesh
            name="Object_4008"
            castShadow
            receiveShadow
            geometry={nodes.Object_4008.geometry}
            material={materials.Pagine_Laterali}
          />
        </mesh>
        <mesh
          name="Object_2003"
          castShadow
          receiveShadow
          geometry={nodes.Object_2003.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2004"
          castShadow
          receiveShadow
          geometry={nodes.Object_2004.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2005"
          castShadow
          receiveShadow
          geometry={nodes.Object_2005.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2006"
          castShadow
          receiveShadow
          geometry={nodes.Object_2006.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2007"
          castShadow
          receiveShadow
          geometry={nodes.Object_2007.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2008"
          castShadow
          receiveShadow
          geometry={nodes.Object_2008.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/cuartoPortfolio.glb");
