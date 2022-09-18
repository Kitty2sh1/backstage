<template>
    <div class="list">
        <el-card class="box-card">
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column type="index" label="序号">
                </el-table-column>
                <el-table-column prop="date" label="商品图片">
                    <template slot-scope="scope">
                        <img :src="scope.row.pic" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="商品名称">
                    <template slot-scope="scope">
                        <p>{{scope.row.name}}</p>
                        <p>品牌:{{scope.row.brandName}}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="商品价格">
                    <template slot-scope="scope">
                        <p>原价:{{scope.row.originalPrice}}</p>
                        <p>现价:{{scope.row.price}}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="商品类别">
                    <template slot-scope="scope">
                        <p>{{scope.row.productCategoryName}}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="标签">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-pagination @size-change="render" @current-change="render" :current-page.sync="pagenum"
                :page-sizes="[5, 10, 15, 20]" :page-size.sync="pagesize"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import { getGoodsList } from "../utils/index"
import AboutView from "./AboutView.vue";
export default {
    data() {
        return {
            tableData: [],
            pagesize: 10,//每页条数
            pagenum: 1,//当前页码
            total: 0
        };
    },
    methods: {
        render() {
            this.queryList()
        },
        queryList() {
            getGoodsList(this.pagenum, this.pagesize).then(res => {
                console.log(res);
                this.tableData = res.data.data.rows
                this.total = res.data.data.total
            });
        }
    },
    computed: {},
    created() {
        this.queryList()
    },
    components: { AboutView }
}
</script>

<style lang="scss" scoped>
.list {
    padding: 0 20px;

    img {
        width: 100px;
        height: 100px;
    }
}
</style>